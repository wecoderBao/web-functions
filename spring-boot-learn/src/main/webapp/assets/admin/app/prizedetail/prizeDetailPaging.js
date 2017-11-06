/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read1 请将此行删除
*  欢迎加入官方QQ群:323237052
*/

//构造入参
function buildReqParam(){
    var requestParam = {date:new Date().getTime()}
        setRequestParamByName(requestParam,'idFirst')
        setRequestParamByName(requestParam,'prizeIdentifierFirst')
        setRequestParamByName(requestParam,'prizeFromFirst')
        setRequestParamByName(requestParam,'nameFirst')
        setRequestParamByName(requestParam,'winPrizeByCodeFirst')
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
    var template =
            '<tr id="tr{id}"><td><input type="checkbox" value="{id}" class="tdcheckbox"></td><td>{rankNum}</td>'+

            '<td><a title="点击查看详情" target="_blank" onclick="openUrl(this,\'admin/prize/detail_param?identifier={prizeIdentifier}\')"> {prizeIdentifierForeignShowValue}</a></td>' +
                    '<td>{id}</td>' +
                    '<td>{mustWin}</td>' +
                    '<td>{winPrizeByCode}</td>' +
                    '<td>{prizeType}</td>' +
                    '<td>{name}</td>' +
                    '<td>{qty}</td>' +
                    '<td>{winProbability}</td>' +
                    '<td>{repeatWin}</td>' +
        '<td>' +
        '<a href="admin/prize_detail/detail/{id}?queryParamCacheKey='+queryParamCacheKey+'">编辑</a>' +
        '<a href="javascript:{}" onclick="deleteItem(\'prize_detail\',\'{id}\')">删除</a>'+
        '</td></tr>';
    var reqParam = buildReqParam()
    var pageIndex = reqParam.pageIndex
    var pageSize = reqParam.limit;//每页多少条记录
    var pageCount = reqParam.pageCount;//总共多少条记录
    var url ='admin/prize_detail/page/'+pageIndex+'/'+pageSize+'/'+pageCount;
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
                        var prizeTypeMap = {"":"全部","0":"普通蓝0","1":"特殊紫1","2":"稀有黄2","3":"超级稀有金4"}
                        value.prizeType = buildSelect(prizeTypeMap,value.prizeType,'prize_detail','prizeType','id')
                        var mustWinMap = {"":"全部","false":"否","true":"是"}
                        value.mustWin = buildSelect(mustWinMap,value.mustWin,'prize_detail','mustWin','id')
                        var repeatWinMap = {"":"全部","false":"否","true":"是"}
                        value.repeatWin = buildSelect(repeatWinMap,value.repeatWin,'prize_detail','repeatWin','id')
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
    var url ='admin/prize_detail/export/'+exportFile+'/'+start+'/'+limit;
    window.location.href=url+'?'+buildUrlParam(buildReqParam());
}