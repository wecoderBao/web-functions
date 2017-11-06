$(function(){
	getPrizePage(1);
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
            getPrizePage(1);
        }
    });
    //查询
    $("#querySubmit").click(function(){
        getPrizePage(1);
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
function deletePrize(id){
    if(!confirm("确定要删除？")){
        return
    }
    $.getJSON("admin/prize/delete/"+id,{date:new Date().getTime()},function(data){
        if(data.code =='ok'){
            alert("删除成功")
            $("#tr"+id).remove()
        }else{
            alert("删除失败")
        }
    })
}
/*   获取问答信息  //pageIndex 当前是第几页 href="'+ctx+'/student/toviewWork/{studentHomeworkHeadId}"*/
function  getPrizePage(pageIndex){
    var template = '<tr id="tr{id}"><td>{rankNum}</td><td>{identifier}</td><td>{name}</td><td>{prizeDesc}</td><td>{beginTime}</td><td>{endTime}</td><td>{createTime}</td><td>{statusStr}</td><td>{needLoginStr}</td><td>{ipRestrictStr}</td><td>{ipRestrictTypeStr}</td><td>{loginRestrictCount}</td><td>{loginRestrictTypeStr}</td>' + 
        '<td><a href="admin/prize/detail/{id}">编辑</a> <a href="javascript:{}" onclick="deletePrize({id})">删除</a></td></tr>';
    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/prize/page/'+pageIndex+'/'+pageCount;
    var requestParam = {date:new Date().getTime()}
    var identifier = $("#identifier").val();
    if(identifier!=''){
        requestParam.identifier=identifier;
    }
    var name = $("#name").val();
    if(name!=''){
        requestParam.name=name;
    }
    var createTime = $("#createTime").val();
    if(createTime!=''){
        requestParam.createTime=createTime;
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
                        //statusStr 自定义的字段
                        var status = value.status;
                        if(status=='1'){
                            value.statusStr = "是";
                        }else{
                            value.statusStr = "否";
                        }
                        //needLoginStr 自定义的字段
                        var needLogin = value.needLogin;
                        if(needLogin=='1'){
                            value.needLoginStr = "是";
                        }else{
                            value.needLoginStr = "否";
                        }
                        //ipRestrictStr 自定义的字段
                        var ipRestrict = value.ipRestrict;
                        if(ipRestrict=='1'){
                            value.ipRestrictStr = "是";
                        }else{
                            value.ipRestrictStr = "否";
                        }
                        //ipRestrictTypeStr 自定义的字段
                        var ipRestrictType = value.ipRestrictType;
                        if(ipRestrictType=='1'){
                            value.ipRestrictTypeStr = "是";
                        }else{
                            value.ipRestrictTypeStr = "否";
                        }
                        //loginRestrictTypeStr 自定义的字段
                        var loginRestrictType = value.loginRestrictType;
                        if(loginRestrictType=='1'){
                            value.loginRestrictTypeStr = "是";
                        }else{
                            value.loginRestrictTypeStr = "否";
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
                        getPrizePage(parseInt(pg));
                    }
                }
            })
        }
    });
}
