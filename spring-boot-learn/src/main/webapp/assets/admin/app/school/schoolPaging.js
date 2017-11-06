/**
* Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 799374340@qq.com
*/
//构造入参
function buildReqParam(){
    var requestParam = {date:new Date().getTime()}
    setRequestParamById(requestParam,'schoolNameFirst')
    setRequestParamById(requestParam,'schoolTypeFirst')
    setRequestParamByName(requestParam,'openFirst')
    setRequestParamById(requestParam,'classCountFirst')
    setRequestParamById(requestParam,'createTimeFirst')
    setRequestParamById(requestParam,'createTimeSecond')
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
                '<td><img style="width:80px" src="{CTX}{headImg}"/></td>' +
                    '<td>{schoolName}</td>' +
                    '<td>{schoolType}</td>' +
                    '<td>{open}</td>' +
                    '<td>{classCount}</td>' +
                    '<td>{createTime}</td>' +
                    '<td>{updateTime}</td>' +
        '<td><a href="admin/school/detail/{id}">编辑</a>' +
        '<a href="javascript:{}" onclick="deleteItem(\'school\',{id})">删除</a></td></tr>';

    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/school/page/'+pageIndex+'/'+pageSize+'/'+pageCount;

    $.ajax({
        url:url,
        type:'get',
        dataType:'json',
        data:buildReqParam(),
        cache:false,
        beforeSend:function(xhr){},
        complete:function(xhr){},
        success:function(data){
            var rankNum = calcRankNum(pageIndex,pageSize);
            $.each(data.result, function(index, val){
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
                        var schoolTypeMap = {"":"全部","0":"普通","1":"重点"}
                        value.schoolType = schoolTypeMap[value.schoolType+""]
                        var openMap = {"":"全部","false":"否","true":"是"}
                        value.open = openMap[value.open+""]
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
function exportJsonFile(){
    var start = $("#start").val()
    var limit = $("#limit").val()
    var url ='admin/school/export/json/'+start+'/'+limit;
    window.location.href=url+'?'+buildUrlParam(buildReqParam());
}