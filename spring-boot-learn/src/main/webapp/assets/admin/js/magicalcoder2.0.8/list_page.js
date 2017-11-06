//version 2016-03-23


function bindCheckAllEvent(){
    $("#checkAll").on("click",function(){
        if($("#checkAll").is(":checked")){
            $(".tdcheckbox").attr("checked",true);
        }else{
            $(".tdcheckbox").attr("checked",false);
        }
    })
}

function initOrderBy() {
    var orderBySqlField = $("#orderBySqlField").val();
    var descAsc = $("#descAsc").val();
    if(orderBySqlField!='' && descAsc!=''){
        $("#thead").find("th").each(function(){
            var orderField = $(this).attr("orderField");
            if(orderField==orderBySqlField){
                //还原其他的th
                $("#thead").find("th").each(function(){
                    var thCls = $(this).attr("class");
                    if(typeof thCls != 'undefined'){
                        $(this).attr("class","sorting");
                    }
                })
                if(descAsc=='desc'){
                    $(this).attr("class","sorting_desc")
                }else {
                    $(this).attr("class","sorting_asc")
                }
                return
            }
        });
    }
}

function bindOrderByEvent(){
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
            var orderDescAsc = "desc"
            if( thClass.indexOf('sorting_asc')!=-1){
                $(this).attr("class","sorting_desc")
                //倒序排列
            }else if(thClass.indexOf('sorting_desc')!=-1){
                //升序排列
                $(this).attr("class","sorting_asc")
                orderDescAsc="asc"
            }else if(thClass.indexOf('sorting')!=-1){
                //倒序排列
                $(this).attr("class","sorting_desc")
            }
            if($("#orderBySqlField").length>0)
                $("#orderBySqlField").val(orderField)
            if($("#descAsc").length>0)
                $("#descAsc").val(orderDescAsc)
            buildQueryParamCacheKeyAndSetCache(buildReqParam(),"queryParamCacheKey",getItemPage)
        }
    });
}
function notBlank(str){
    return typeof str != 'undefined' && str !=''
}

//废弃
function buildOrderByObj(){
    var orderBy = {orderBySqlField:'',descAsc:''}

    $("#thead").find("th").each(function(){
        var thCls = $(this).attr("class");
        var orderField = $(this).attr("orderField");
        if(typeof thCls != 'undefined'){
            if(thCls.indexOf("sorting_desc")!=-1){
                if(notBlank(orderField)){
                    orderBy.orderBySqlField = orderField
                    orderBy.descAsc = "desc"
                }
            }else if(thCls.indexOf("sorting_asc")!=-1){
                if(notBlank(orderField)){
                    orderBy.orderBySqlField = orderField
                    orderBy.descAsc = "asc"
                }
            }
        }
    })
    return orderBy;
}
//废弃 不安全
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
function deleteItem(lowerEntity,id){
    if(!confirm("确定要删除？")){
        return
    }
    $.getJSON("admin/"+lowerEntity+"/delete/"+id,{date:new Date().getTime()},function(data){
        if(data.code ==0){
            alert("删除成功")
            id = id+'';
            if(id.indexOf("/")!=-1)//唯一键的表
            id = id.replace("/","_");
            $("#tr"+id).remove()
        }else{
            alert(data.message)
        }
    })
}

function truncateTable(lowerEntity){
    if(!confirm("确定要清空表全部数据吗？")){
        return
    }
    $.getJSON("admin/"+lowerEntity+"/truncate",{date:new Date().getTime()},function(data){
        if(data.code ==0){
            alert("操作成功")
            window.location.reload();
        }else{
            alert(data.message)
        }
    })
}

function batchDeleteItem(lowerEntity){
    if(!confirm("确定要删除？")){
        return
    }
    var ids = []
    $(".tdcheckbox").each(function(){
        if($(this).is(":checked")){
            var id = $(this).val();
            ids.push(id)
        }
    })
    if(ids.length<=0){
        alert("请选择要删除的记录");
        return;
    }
    $.getJSON("admin/"+lowerEntity+"/batchdelete/"+ids.join(","),{date:new Date().getTime()},function(data){
        if(data.code ==0){
            alert("删除成功")
            for(var i=0;i<ids.length;i++){
                $("#tr"+ids[i]).remove()
            }
        }else{
            alert(data.message)
        }
    })
}
//批量拷贝
function batchCopyItem(lowerEntity){
    if(!confirm("确定要复制？")){
        return
    }
    var ids = []
    $(".tdcheckbox").each(function(){
        if($(this).is(":checked")){
            var id = $(this).val();
            ids.push(id)
        }
    })
    if(ids.length<=0){
        alert("请选择要复制的记录");
        return;
    }
    $.getJSON("admin/"+lowerEntity+"/batch_copy/"+ids.join(","),{date:new Date().getTime()},function(data){
        if(data.code ==0){
            alert("复制成功")
            getItemPage()
        }else{
            alert(data.message)
        }
    })
}


//批量更新
function batchUpdateItem(lowerEntity){
    if(!confirm("确定要批量更新？")){
        return
    }
    var ids = []
    $(".tdcheckbox").each(function(){
        if($(this).is(":checked")){
            var id = $(this).val();
            ids.push(id)
        }
    })
    if(ids.length<=0){
        alert("请选择要更新的记录");
        return;
    }

    var formData = findBatchUpdateFormData($("#batchUpdateModal"))
    var i=0;
    for(var key in formData){
        i++;
    }
    if(i<1){
        alert("无更新内容");
        return;
    }
    formData.magicalClearCache=new Date().getTime()
    $.post("admin/"+lowerEntity+"/batch_update/"+ids.join(","),
        formData,
        function(data){
        if(data.code ==0){
            alert("更新成功")
            $("#closeBatchUpdateModal").click();
            getItemPage()
        }else{
            alert(data.message)
        }
    })
}
function findBatchUpdateFormData($form){
    var item = {}
    $form.find('input').each(function(idx,element){
        var $element = $(element)
        var type = $element.attr("type")
        if(type!='radio' && type!='checkbox' && type!='file'){
            var name = $element.attr("name");
            var value = $element.val();
            if(value!=''){
                item[name] = value
            }
        }
    })
    //radio特殊处理 name是有下划线的
    $form.find('input[type="radio"]').each(function(idx,element){
        var $element = $(element)
        var name = $element.attr("name");
        if($element.is(":checked")){
            var value = $element.val();
            var originalName = findRadioOriginalName(name)
            if(originalName!=''){
                item[originalName] = value
            }
        }
    })
    $form.find('select').each(function(idx,element){
        var $element = $(element)
        var name = $element.attr("name");
        var value = $element.val();
        if(value!=''){
            item[name] = value
        }
    })
    $form.find('textarea').each(function(idx,element){
        var $element = $(element)
        var name = $element.attr("name");
        var value = $element.val();
        if(value!=''){
            item[name] = value
        }
    })
    return item;
}
function setRequestParamById(requestParam,id){
    var v = $("#"+id).val();
    if(v!=''){
        requestParam[id]=$.trim(v);
    }
}
function setRequestParamByName(requestParam,name){
    var type = $("[name='"+name+"']").attr("type")
    var v ;
    if(type && type=='radio'){
        v = $("[name='"+name+"']:checked").val();
    }else{
        v = $("[name='"+name+"']").val();
    }
    if(v && v!=''){
        requestParam[name]=$.trim(v);
    }

}
//列表页下拉操作
function buildSelect(map,value,lowerEntity,updateField,autoIncreaseField){
    var html = '<select class="form-control" onchange="changeSelect(this,\''+lowerEntity+'\',\''+updateField+'\',\''+autoIncreaseField+'\')">'
    for(var key in map){
        if(key=='') continue;
        var mapValue = map[key];
        var selected = ''
        if(value+'' == key+''){
            selected = 'selected'
        }
        html +='<option '+selected+' value="'+key+'">'+mapValue+'</option>'
    }
    html +='</select>'
    return html
}
function changeSelect(t,lowerEntity,updateField,autoIncreaseField){
    var selectValue = $(t).val();
    var id = $(t).parent().parent().find(".tdcheckbox").val()
    var entityObj = {}
    entityObj[""+autoIncreaseField] = id
    entityObj[""+updateField] = selectValue
    ajaxUpdate(lowerEntity,entityObj);
}
function ajaxUpdate(lowerEntity,entityObj){
    var url ='admin/'+lowerEntity+'/ajax_update?_date='+new Date().getTime();
    $.post(url,entityObj,function(data){
        if(data.code !=0){
            alert(data.message)
        }
    })
}