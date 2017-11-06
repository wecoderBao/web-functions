//====================================外键下来查询=======================================

function foreignSearch(foreignTableName,inputId,selectValue,foreignJavaField){
    $('#'+inputId+'Search').typeahead({hint: true,highlight: true,minLength: 0},
        {
            //name: inputId,
            display: "selectValue",
            source: new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('className'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: CTX+'admin/'+foreignTableName+'/type_ahead_search?keyword=%QUERY&selectValue='+selectValue+'&foreignJavaField='+foreignJavaField,
                    wildcard: '%QUERY'
                }
            }),
            limit:100
        });
    $('#'+inputId+'Search').bind('typeahead:select', function(ev, suggestion) {
        $('#'+inputId).val(suggestion.hiddenId)
    });
}
function registerInputSelect($inputSelect){
    var $hiddenInput = $inputSelect.find("input[type='hidden']")
    var $searchInput = $inputSelect.find("input[type='text']")
    foreignSearch2($hiddenInput,$searchInput)
}
function foreignSearch2($hiddenInput,$searchInput){
    var foreignTableName = $hiddenInput.attr("foreignTableName")
    var foreignJavaField = $hiddenInput.attr("foreignJavaField")
    var selectValue = $hiddenInput.attr("selectValue")
    $searchInput.typeahead({hint: true,highlight: true,minLength: 0},
        {
            //name: inputId,
            display: "selectValue",
            source: new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('className'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: CTX+'admin/'+foreignTableName+'/type_ahead_search?keyword=%QUERY&selectValue='+selectValue+'&foreignJavaField='+foreignJavaField,
                    wildcard: '%QUERY'
                }
            }),
            limit:100
        });
    $searchInput.bind('typeahead:select', function(ev, suggestion) {
        $hiddenInput.val(suggestion.hiddenId)
    });
    //如果是js设置值 失去焦点后会变成空值 所以额外处理下
    $searchInput.bind('click', function() {
        $hiddenInput.attr("cacheValue",$searchInput.val())
    });
    $searchInput.bind('blur', function() {
        var value =$searchInput.val()
        if(value==''){
            $searchInput.val($hiddenInput.attr("cacheValue"))
        }
    });
}
//处理外键下拉的默认值 只要页面有这种表单 并且隐藏值不为空 调用此方法就会自动显示
function inputSelectSetValue(){
    var foreignTableNameMap = {}
    var foreignJavaFieldMap = {}
    $(".input-select").each(function (index,item) {
        var $hiddenInput = $(item).find("input[type='hidden']")
        var name = $hiddenInput.attr("name")
        //var $searchItem = $(item).find("[name='"+name+"Search']")
        var hiddenValue = $hiddenInput.val()
        var foreignTableName = $hiddenInput.attr("foreignTableName")
        var foreignJavaField = $hiddenInput.attr("foreignJavaField")
        var selectValue = $hiddenInput.attr("selectValue")
        if(hiddenValue!=''){
            var tableList = foreignTableNameMap[foreignTableName]
            if(!tableList){
                tableList = []
                foreignTableNameMap[foreignTableName] = tableList
            }
            var item = {}
            item[foreignJavaField] = hiddenValue
            tableList.push(item)

            foreignJavaFieldMap[foreignTableName] = foreignJavaField
        }
    })
    //查询值
    for(var foreignTableName in foreignTableNameMap){
        var tableList = clearRepeat(foreignTableNameMap[foreignTableName])
        var foreignJavaField = foreignJavaFieldMap[foreignTableName]
        //去重
        var reqUrl = "admin/"+foreignTableName+"/batch_search_type_ahead"
        $.getJSON(reqUrl,{date:new Date().getTime(),searchMapListJson:JSON.stringify(tableList),foreignJavaField:foreignJavaField},function(data){
            if(data.code == 0){
                setValue(data.info)
            }
        })
    }
}

function clearRepeat(tableList){
    if(tableList!=null && tableList.length>0){
        var existMap = {}
        for(var i=0;i<tableList.length;i++){
            var item = tableList[i]
            for(var k in item){
                var itemValue = item[k]
                var value = existMap[itemValue]
                if(value){
                    tableList.splice(i,1)
                    i--
                }else {
                    existMap[itemValue]=1
                }
            }

        }
    }
    return tableList;
}
function setValue(resultMap){
    var useForeignTableName = resultMap.foreignTableName
    var returnMap = resultMap.returnMap;
    $(".input-select").each(function (index,item) {
        var $hiddenInput = $(item).find("input[type='hidden']")
        var name = $hiddenInput.attr("name")
        var $searchItem = $(item).find("[name='"+name+"Search']")
        var hiddenValue = $hiddenInput.val()
        var foreignTableName = $hiddenInput.attr("foreignTableName")
        var foreignJavaField = $hiddenInput.attr("foreignJavaField")
        var selectValue = $hiddenInput.attr("selectValue")
        if(selectValue==''){
            selectValue = resultMap.selectValue;
        }
        if(foreignTableName == useForeignTableName){
            if(hiddenValue!='' && selectValue!=''){
                var entity = returnMap[hiddenValue];
                if(entity){
                    var showValue = []
                    var fieldsIdArr = selectValue.split(",");
                    for(var i=0;i<fieldsIdArr.length;i++){
                        var field = fieldsIdArr[i];
                        showValue.push(entity[field])
                    }
                    $searchItem.val(showValue.join("-"))
                }
            }
        }
    })
}
