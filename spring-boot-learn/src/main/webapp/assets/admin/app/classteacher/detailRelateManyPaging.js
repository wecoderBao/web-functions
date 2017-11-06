/**
* Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 799374340@qq.com
*///设置关联
function relate(chechbox,id){
    var classId = $("#classId").val()
    var url;
    if(!$(chechbox).is(":checked")){
        url = "admin/class_teacher/delete_relate/"+classId+"/"+id;
    }else{
        url = "admin/class_teacher/add_relate/"+classId+"/"+id;
    }
    $.getJSON(url,{date:new Date().getTime()},function(data){
        if(data.code =='ok'){
            //alert("成功")
        }else{
            alert("失败")
        }
    })
}

/*pageIndex 当前是第几页 1:第一页*/
function  getItemPage(pageIndex){
    var template =
    '<tr id="tr{id}"><td><input type="checkbox" {checked} value="{id}" onclick="relate(this,{id})" class="tdcheckbox"></td><td>{rankNum}</td>'+
            '<td>{teacherName}</td>' +
            '<td>{age}</td>' +
        '<td>'+
        '</td>'+
    '</tr>';
    var pageSize = 20;//每页多少条记录
    var pageCount = parseInt($("#pageCount").val());//总共多少条记录
    var url ='admin/class_teacher/page_relate/'+pageIndex+'/'+pageCount;
    var requestParam = {date:new Date().getTime()}
    setRequestParamById(requestParam,'teacherNameFirst')
    setRequestParamById(requestParam,'ageFirst')
    setRequestParamById(requestParam,'ageSecond')
    setRequestParamById(requestParam,'classId')
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
                    //自定义输出
                    if(value.teacherId!=null){
                        value.checked="checked";
                    }else{
                        value.checked=""
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
            //构造分页html
            appendPagingBarHtml("pagination",pageIndex,pageCount,pageSize)
        }
    });
}
