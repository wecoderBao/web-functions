$(function(){
	getPrizeDetailPage(1);
    //绑定排序事件
    $("#thead").find("th").click(function(){
        var orderField = $(this).attr("orderField");
        var thClass = $(this).attr("class");
        //改变自己的
        if(typeof thClass != 'undefined'){
            //还原其他的th
            $("#thead").find("th").each(function(){
                var thCls = $(this).attr("class");
                if(typeof thCls != 'undefined'){
                    $(this).attr("class","sorting");
                }
            })
            if( thClass.indexOf('sorting_asc')!=-1){
                $(this).attr("class","sorting_desc")
                //倒序排列
            }else if(thClass.indexOf('sorting_desc')!=-1){
                //升序排列
                $(this).attr("class","sorting_asc")
            }else if(thClass.indexOf('sorting')!=-1){
                //倒序排列
                $(this).attr("class","sorting_desc")
            }
            getPrizeDetailPage(1);
        }
    });
    //查询
    $("#querySubmit").click(function(){
        getPrizeDetailPage(1);
    })
});
function notBlank(str){
    return typeof str != 'undefined' && str !=''
}
function buildOrderBy(){
    var orderBy = ''
    $("#thead").find("th").each(function(){
        var thCls = $(this).attr("class");
        var orderField = $(this).attr("orderField");
        if(typeof thCls != 'undefined'){
            if(thCls.indexOf("sorting_desc")!=-1){
                if(notBlank(orderField)){
                    orderBy = orderField + " desc "
                    return
                }
            }else if(thCls.indexOf("sorting_asc")!=-1){
                if(notBlank(orderField)){
                    orderBy = orderField + " asc "
                    return
                }
            }
        }
    })
    return orderBy;
}
function deletePrizeDetail(id){
    if(!confirm("确定要删除？")){
        return
    }
    $.getJSON("admin/prizeDetail/delete/"+id,{date:new Date().getTime()},function(data){
        if(data.code =='ok'){
            alert("删除成功")
            $("#tr"+id).remove()
        }else{
            alert("删除失败")
        }
    })
}
/*   获取问答信息  //pageIndex 当前是第几页 href="'+ctx+'/student/toviewWork/{studentHomeworkHeadId}"*/
function  getPrizeDetailPage(pageIndex){
    var template = '<tr id="tr{id}"><td>{rankNum}</td><td>{id}</td><td>{prizeIdentifier}</td><td>{winProbability}</td><td>{remindMessage}</td><td>{qty}</td><td>{prizeTypeStr}</td>' +
        '<td><a href="admin/prizeDetail/detail/{id}">编辑</a> <a href="javascript:{}" onclick="deletePrizeDetail({id})">删除</a> <a href="admin/prize/list/{prizeIdentifier}">查看抽奖</a><button onclick="queryCount({id})">查看已中奖数量</button></td></tr>';
    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/prizeDetail/page/'+pageIndex+'/'+pageCount;
    var requestParam = {date:new Date().getTime()}
    var prizeIdentifier = $("#prizeIdentifier").val();
    if(prizeIdentifier!=''){
        requestParam.prizeIdentifier=prizeIdentifier;
    }
    //排序
    var orderBy = buildOrderBy()
    if(typeof orderBy =='undefined' || orderBy!=''){
        requestParam.orderBy = orderBy;
    }
    $.ajax({
        url:url,
        type:'get',
        dataType:'json',
        data:requestParam,
        cache:false,
        beforeSend:function(xhr){},
        complete:function(xhr){},
        success:function(data){
            var rankNum = calcRankNum(pageIndex,20);
            $.each(data.result, function(index, val){
                if(index =="pageCount"){
                    $("#pageCount").val(pageCount)
                    pageCount = val;
                }
                if(index == "pageList"){
                    //var msg = val;
                    var templateHtml = "";
                    $.each(val, function(index1, value){
                        //排名
                        value.rankNum = ++rankNum;
                        //prizeTypeStr 自定义的字段
                        var prizeType = value.prizeType;
                        if(prizeType=='1'){
                            value.prizeTypeStr = "特殊奖";
                        }else{
                            value.prizeTypeStr = "普通奖";
                        }
                        //赋值替换
                        var tm = template;
                        for(key in value){
                            var reg = new RegExp('{'+key+'}','g');
                            tm = tm.replace(reg , value[key]);
                        }
                        templateHtml+=tm;
                    });
                    $("#tbody").html(templateHtml);
                }
            });
            var page_bar =  build_bar(pageIndex,pageCount,pageSize);
            $("#pagination").html(page_bar);
            $("#pagination").find('a').click(function(){
                var pg = $(this).attr('pg');
                var li = $(this).parent();
                var liclass = li.attr('class')
                if(typeof liclass != 'undefined'){
                    if(liclass.indexOf('active')==-1){
                        getPrizeDetailPage(parseInt(pg));
                    }
                }
            })
        }
    });
}

function queryCount(id){
    var url ="admin/prizeUserWin/query_count/"+id
    $.getJSON(url,{data:new Date().getTime()},function(data){
        if(data.code == 0){
            var sumCount = data.info.sumCount
            var sendCount = data.info.sendCount
            alert("总人数："+sumCount+"  已领奖人数："+sendCount)
        }
    })
}