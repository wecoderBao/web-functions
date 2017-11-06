/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
*  欢迎加入官方QQ群:323237052
*/

//构造入参
function buildReqParam(){
    var requestParam = {date:new Date().getTime()}
        setRequestParamByName(requestParam,'prizeIdentifierFirst')
        setRequestParamByName(requestParam,'userIdFirst')
    setRequestParamByName(requestParam,'createTimeFirst')
    setRequestParamByName(requestParam,'createTimeSecond')
        setRequestParamByName(requestParam,'prizeFromFirst')
        setRequestParamByName(requestParam,'prizeDetailIdFirst')
        setRequestParamByName(requestParam,'prizeDetailNameFirst')
        setRequestParamByName(requestParam,'prizeUserWinIdFirst')
        setRequestParamByName(requestParam,'remarkFirst')
        setRequestParamByName(requestParam,'prizeRootIdFirst')

    //其他固定参数
    requestParam.orderBySqlField = $("#orderBySqlField").val();
    requestParam.descAsc = $("#descAsc").val();
    requestParam.pageIndex = parseInt($("#pageIndex").val());
    requestParam.pageCount = parseInt($("#pageCount").val());
    requestParam.start = parseInt($("#start").val());
    requestParam.limit = parseInt($("#limit").val());
    return requestParam;
}

/*pageIndex 当前是第几页 1:第一页*/
function  getItemPage(){
    var queryParamCacheKey = $("#queryParamCacheKey").val()
    var focusTrId = $("#focusTrId").val()
    var canDelete = $("#canDelete").val()
    var canUpdate = $("#canUpdate").val()
    var template = []
        template.push('<tr id="tr{id}" class="{focusTrId}">')
        template.push('<td><input type="checkbox" value="{id}" class="tdcheckbox"></td><td>{rankNum}</td>')

        template.push('<td>{prizeIdentifier}</td>')
        template.push('<td>{userId}</td>')
        template.push('<td>{createTime}</td>')
        template.push('<td>{prizeFrom}</td>')
        template.push('<td>{prizeDetailId}</td>')
        template.push('<td>{prizeDetailName}</td>')
        template.push('<td>{prizeUserWinId}</td>')
        template.push('<td>{remark}</td>')
        template.push('<td><a title="点击查看详情" target="_blank" onclick="openUrl(this,\'admin/prize_root/detail_param?id={prizeRootId}\')"> {prizeRootIdForeignShowValue}</a></td>')

        template.push('<td>')
        if(canUpdate=='true'){
            template.push('<a class="btn btn-sm btn-info" href="admin/prize_user_win_restrict/detail/{id}?queryParamCacheKey='+queryParamCacheKey+'">编辑</a>')
        }else{
            template.push('<a class="btn btn-sm btn-info" href="admin/prize_user_win_restrict/detail/{id}?queryParamCacheKey='+queryParamCacheKey+'">查看</a>')
        }
        if(canDelete=='true'){
            template.push('<a class="btn btn-sm btn-danger" href="javascript:{}" onclick="deleteItem(\'prize_user_win_restrict\',\'{id}\')">删除</a>')
        }
        template.push('</td>')
        template.push('</tr>')
    var reqParam = buildReqParam()
    var pageIndex = reqParam.pageIndex
    var pageSize = reqParam.limit;//每页多少条记录
    var pageCount = reqParam.pageCount;//总共多少条记录
    var url ='admin/prize_user_win_restrict/page/'+pageIndex+'/'+pageSize+'/'+pageCount;
    $.ajax({
        url:url,
        type:'get',
        dataType:'json',
        data:reqParam,
        cache:false,
        beforeSend:function(xhr){},
        complete:function(xhr){},
        success:function(data){
            if(data.code!=0){
                alert(data.message);
                return;
            }
            var rankNum = calcRankNum(pageIndex,pageSize);
            $.each(data.info, function(index, val){
                if(index =="pageCount"){
                    $("#pageCount").val(pageCount)
                    pageCount = val;
                }
                if(index == "pageList"){
                    var templateHtml = "";
                    $.each(val, function(index1, value){
                        //排名
                        value.rankNum = ++rankNum;
                        value.CTX = CTX;
                        //自定义输出
                        var prizeFromMap = {"":"全部","0":"普通来源","1":"关注抽奖","10":"其他抽奖","2":"分享抽奖","3":"奖券抽奖","4":"分享老用户抽奖","5":"分享新用户抽奖"}
                        value.prizeFrom = buildSelect(prizeFromMap,value.prizeFrom,'prize_user_win_restrict','prizeFrom','id')
                        //聚焦
                        if(value.id+'' == focusTrId){
                            value.focusTrId = "success"
                        }else {
                            value.focusTrId = ""
                        }
                        //赋值替换
                        var tm = template.join('');
                        for(var key in value){
                            var reg = new RegExp('{'+key+'}','g');
                            tm = tm.replace(reg , value[key]);
                        }
                        templateHtml+=tm;
                    });
                    $("#tbody").html(templateHtml);
                }
            });
            //构造分页html
            appendPagingBarHtml("pagination",pageIndex,pageCount,pageSize)
        }
    });
}
//导出json格式文件
function exportFile(exportFile){
    var start = $("#start").val()
    var limit = $("#limit").val()
    var url ='admin/prize_user_win_restrict/export/'+exportFile+'/'+start+'/'+limit;
    window.location.href=url+'?'+buildUrlParam(buildReqParam());
}