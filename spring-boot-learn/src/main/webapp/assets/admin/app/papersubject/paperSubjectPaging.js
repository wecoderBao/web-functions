/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
*  欢迎加入官方QQ群:323237052
*/

//构造入参
function buildReqParam(){
    var requestParam = {date:new Date().getTime()}
        setRequestParamByName(requestParam,'subjectIndexFirst')
        setRequestParamByName(requestParam,'subjectCatogoryFirst')
        setRequestParamByName(requestParam,'subjectFirst')
        setRequestParamByName(requestParam,'huoDongIdFirst')

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

        template.push('<td>{subjectIndex}</td>')
        template.push('<td>{subjectCatogory}</td>')
        template.push('<td>{subject}</td>')
        template.push('<td>{maxCostSecond}</td>')
        template.push('<td>{answer}</td>')
        template.push('<td><a title="点击查看详情" target="_blank" onclick="openUrl(this,\'admin/huodong/detail_param?id={huoDongId}\')"> {huoDongIdForeignShowValue}</a></td>')

        template.push('<td>')
        if(canUpdate=='true'){
            template.push('<a class="btn btn-sm btn-info" href="admin/paper_subject/detail/{id}?queryParamCacheKey='+queryParamCacheKey+'">编辑</a>')
        }else{
            template.push('<a class="btn btn-sm btn-info" href="admin/paper_subject/detail/{id}?queryParamCacheKey='+queryParamCacheKey+'">查看</a>')
        }
        if(canDelete=='true'){
            template.push('<a class="btn btn-sm btn-danger" href="javascript:{}" onclick="deleteItem(\'paper_subject\',\'{id}\')">删除</a>')
        }
        template.push('</td>')
        template.push('</tr>')
    var reqParam = buildReqParam()
    var pageIndex = reqParam.pageIndex
    var pageSize = reqParam.limit;//每页多少条记录
    var pageCount = reqParam.pageCount;//总共多少条记录
    var url ='admin/paper_subject/page/'+pageIndex+'/'+pageSize+'/'+pageCount;
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
                        var subjectCatogoryMap = {"":"全部","0":"A","1":"B","2":"C","3":"D","4":"E"}
                        value.subjectCatogory = buildSelect(subjectCatogoryMap,value.subjectCatogory,'paper_subject','subjectCatogory','id')
                        var answerMap = {"A":"A","B":"B","C":"C","D":"D"}
                        value.answer = buildSelect(answerMap,value.answer,'paper_subject','answer','id')
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
    var url ='admin/paper_subject/export/'+exportFile+'/'+start+'/'+limit;
    window.location.href=url+'?'+buildUrlParam(buildReqParam());
}