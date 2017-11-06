/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
*  欢迎加入官方QQ群:323237052
*/

//构造入参
function buildReqParam(){
    var requestParam = {date:new Date().getTime()}
        setRequestParamByName(requestParam,'uidFirst')
        setRequestParamByName(requestParam,'nicknameFirst')
        setRequestParamByName(requestParam,'emailFirst')
        setRequestParamByName(requestParam,'huoDongIdFirst')
    //排序
    var orderBy = buildOrderByObj()
    requestParam.orderBySqlField = orderBy.orderBySqlField;
    requestParam.descAsc = orderBy.descAsc;
    return requestParam;
}

/*pageIndex 当前是第几页 1:第一页*/
function  getItemPage(pageIndex){
    var template =
            '<tr id="tr{id}"><td><input type="checkbox" value="{id}" class="tdcheckbox"></td><td>{rankNum}</td>'+

                    '<td>{uid}</td>' +
                    '<td>{nickname}</td>' +
                    '<td>{email}</td>' +
                    '<td>{useLocation}</td>' +
                    '<td>{firstGetZiKa}</td>' +
                    '<td>{firstGetLanKa}</td>' +
                    '<td>{huoDongId}</td>' +
        '<td>' +
        '<a href="admin/zoo_user/detail/{id}">编辑</a>' +
        '<a href="javascript:{}" onclick="deleteItem(\'zoo_user\',{id})">删除</a>'+
        '</td></tr>';
    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/zoo_user/page/'+pageIndex+'/'+pageSize+'/'+pageCount;
    $.ajax({
        url:url,
        type:'get',
        dataType:'json',
        data:buildReqParam(),
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
                        var useLocationMap = {"":"全部","0":"h5活动"}
                        value.useLocation = buildSelect(useLocationMap,value.useLocation,'zoo_user','useLocation','id')
                        var firstGetZiKaMap = {"":"全部","false":"否","true":"是"}
                        value.firstGetZiKa = buildSelect(firstGetZiKaMap,value.firstGetZiKa,'zoo_user','firstGetZiKa','id')
                        var firstGetLanKaMap = {"":"全部","false":"否","true":"是"}
                        value.firstGetLanKa = buildSelect(firstGetLanKaMap,value.firstGetLanKa,'zoo_user','firstGetLanKa','id')
                        //赋值替换
                        var tm = template;
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
    var url ='admin/zoo_user/export/'+exportFile+'/'+start+'/'+limit;
    window.location.href=url+'?'+buildUrlParam(buildReqParam());
}