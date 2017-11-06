function insertNewTr(pid){
    var dom = $("#"+pid+"Tbody");
    var tbody = $("#"+pid+"Tab").find('tbody');
    var tr = dom.children()
    var copyTr = tr.clone(true)
    dealSpecialItem(copyTr)
    validateForm2(copyTr)
    registerInputSelect(copyTr.find(".input-select"))
    tbody.append(copyTr)
}


function copyTr(_t){
    var tbody = $(_t).parents('tbody')
    var tr = $(_t).parents("tr")
    //把拷贝的主键值删除清掉
    var newTr = tr.clone(true)
    dealSpecialItem(newTr)
    //typehead问题 clone会出问题 删除重建
    rebuildInputSelect(newTr)
    tbody.append(newTr)
}

function rebuildInputSelect(newTr){
    var div = newTr.find(".input-select")
    div.each(function (index,item) {
        var hiddenInput = $(item).find("input[type='hidden']")
        var name = hiddenInput.attr("name")
        //var searchName = $(item).find(".twitter-typeahead").find('pre').text()
        var searchInputHtml = '<input type="text" class="form-control" name="'+name+'Search" value=""  placeholder="点击搜索" />';
        $(item).find(".twitter-typeahead").remove()
        hiddenInput.val('')
        $(item).append(searchInputHtml)
        registerInputSelect($(item))
    })

}

function dealSpecialItem(newTr){
    newTr.find('td:eq(0)').find("input[type='hidden']").val('')//把隐藏主键置空
    //重新给radio取名字
    newTr.find("td").find("div.col-sm-9").each(function(i,item){
        var randomStr = getRandomStr();
        $(item).find("input[type='radio']").each(function(index,radio){
            var name = $(radio).attr("name");
            $(radio).attr("name",name+randomStr);
        })
    })
}

function deleteTr(_t,lowerEntity){
    var id = $(_t).parents('tr').find("input[type='hidden']").val()
    if(id==''){
        $(_t).parents('tr').remove()
    }else {
        $.getJSON("admin/"+lowerEntity+"/delete/"+id,{date:new Date().getTime()},function(data){
            if(data.code ==0){
                id = id+'';
                if(id.indexOf("/")!=-1)//唯一键的表
                    id = id.replace("/","_");
                $(_t).parents('tr').remove()
                alert("删除成功")
            }else{
                alert(data.message)
            }
        })
    }

}

//返回一个不重复的序列字符串
function getRandomStr(){
    var zm = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var sz = ['0','1','2','3','4','5','6','7','8','9']
    var rt =[]
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    rt.push(zm[fRandomBy(0,25)])
    rt.push(sz[fRandomBy(0,9)])
    //rt.push(Math.random())
    return rt.join('');
}
function fRandomBy(under, over) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * under + 1);
        case 2:
            return parseInt(Math.random() * (over - under + 1) + under);
        default:
            return 0;
    }
}
//========================================详情页表格内表单=========================================
function tableDataList($tableDom){
    var itemList = []
    var trs = $tableDom.find("tbody tr")
    if(trs.length>0){
        for(var i=0;i<trs.length;i++){
            var tr = $(trs[i]);
            itemList.push(findFormData(tr))
        }
    }
    return itemList
}
//还原radio的name originalName_randomOrId
function findRadioOriginalName(name){
    var arr = name.split("_")
    if(arr.length>1){
        arr.pop()
        return arr.join("_")
    }else {
        return arr[0]
    }
}
function findFormData($form){
    var item = {}
    $form.find('input').each(function(idx,element){
        var $element = $(element)
        var type = $element.attr("type")
        if(type!='radio' && type!='checkbox' && type!='file'){
            var name = $element.attr("name");
            var value = $element.val();
            item[name] = value
        }
    })
    //radio特殊处理 name是有下划线的
    $form.find('input[type="radio"]').each(function(idx,element){
        var $element = $(element)
        var name = $element.attr("name");
        if($element.is(":checked")){
            var value = $element.val();
            var originalName = findRadioOriginalName(name)
            item[originalName] = value
        }
    })
    $form.find('select').each(function(idx,element){
        var $element = $(element)

        var name = $element.attr("name");
        var value = $element.val();
        item[name] = value
    })
    $form.find('textarea').each(function(idx,element){
        var $element = $(element)

        var name = $element.attr("name");
        var value = $element.val();
        item[name] = value
    })
    return item;
}