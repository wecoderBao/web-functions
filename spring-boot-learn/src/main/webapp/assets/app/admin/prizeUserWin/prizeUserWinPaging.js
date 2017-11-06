$(function(){
	getPrizeUserWinPage(1);
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
            getPrizeUserWinPage(1);
        }
    });
    //查询
    $("#querySubmit").click(function(){
        getPrizeUserWinPage(1);
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
function deletePrizeUserWin(id){
    if(!confirm("确定要删除？")){
        return
    }
    $.getJSON("admin/prizeUserWin/delete/"+id,{date:new Date().getTime()},function(data){
        if(data.code =='ok'){
            alert("删除成功")
            $("#tr"+id).remove()
        }else{
            alert("删除失败")
        }
    })
}

function sendJf(id){
    $.getJSON("admin/prizeUserWin/send_jf/"+id,{date:new Date().getTime()},function(data){
        if(data.code =='ok'){
            if(data.result){
                alert("发放成功")
            }else {
                alert("发放失败，不满足发放积分要求")
            }
        }else{
            alert("发放失败")
        }
    })
}
/*   获取问答信息  //pageIndex 当前是第几页 href="'+ctx+'/student/toviewWork/{studentHomeworkHeadId}"*/
function  getPrizeUserWinPage(pageIndex){
    var template = '<tr id="tr{id}"><td>{rankNum}</td><td>{prizeIdentifier}</td><td>{prizeDetailId}</td><td>{userId}</td><td>{userName}</td><td>{remindMessage}</td><td>{sendStr}</td><td>{recomendStr}</td>' +
        '<td><a href="admin/prizeUserWin/detail/{id}">编辑</a> <a href="javascript:{}" onclick="deletePrizeUserWin({id})">删除</a> {sendJfHtml}</td></tr>';
    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/prizeUserWin/page/'+pageIndex+'/'+pageCount;
    var requestParam = {date:new Date().getTime()}
    var prizeIdentifier = $("#prizeIdentifier").val();
    if(prizeIdentifier!=''){
        requestParam.prizeIdentifier=prizeIdentifier;
    }
    var prizeDetailId = $("#prizeDetailId").val();
    if(prizeDetailId!=''){
        requestParam.prizeDetailId=prizeDetailId;
    }
    var userId = $("#userId").val();
    if(userId!=''){
        requestParam.userId=userId;
    }
    var userName = $("#userName").val();
    if(userName!=''){
        requestParam.userName=userName;
    }
    var createTime = $("#createTime").val();
    if(createTime!=''){
        requestParam.createTime=createTime;
    }
    var send = $("#send").val();
    if(send!=''){
        requestParam.send=send;
    }
    var recomend = $("input[name='recomend']:checked").val();
    if(recomend!=''){
        requestParam.recomend=recomend;
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
                        //sendStr 自定义的字段
                        var send = value.send;
                        if(send=='1'){
                            value.sendJfHtml = '';
                            value.sendStr = "是";
                        }else{
                            value.sendJfHtml = '<a href="javascript:{}" onclick="sendJf('+value.id+')">发放积分</a>';
                            value.sendStr = "否";
                        }
                        //sendStr 自定义的字段
                        var recomend = value.recomend;
                        if(recomend){
                            value.recomendStr = "是";
                        }else{
                            value.recomendStr = "否";
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
                        getPrizeUserWinPage(parseInt(pg));
                    }
                }
            })
        }
    });
}
