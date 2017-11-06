//version 2017-02-08
/**
 * 页面具有记忆功能
 */
//列表页查询参数记忆
function buildQueryParamCacheKeyAndSetCache(reqParam,queryParamCacheKeyId,callback) {
    var queryParamCacheKey = randomStr(10)
    $.getJSON("admin/util/set_cache/"+queryParamCacheKey,{cacheValue:JSON.stringify(reqParam),
        date:new Date().getTime()},function (data) {
        $("#"+queryParamCacheKeyId).val(queryParamCacheKey)
        callback.call()
    })
}
//恢复上次参数
function restoreBuildQueryParam(queryParamCacheKey,callback) {
    if(queryParamCacheKey!=''){
        $.getJSON("admin/util/get_cache/"+queryParamCacheKey,{date:new Date().getTime()},function (data) {
            if(data.code == 0){
                if(data.info && data.info!=null){
                    var reqParam = JSON.parse(data.info)
                    for(var name in reqParam){
                        var value = reqParam[name]
                        var formNode =$(".box-header .form").find("[name='"+name+"']")
                        var type = formNode.attr("type")
                        if(type=='radio'){
                            $("input[name='"+name+"'][value='"+value+"']").attr("checked",true);
                        }else {
                            formNode.val(value)
                        }
                    }
                    $("#start").val(reqParam.start)
                    $("#limit").val(reqParam.limit)
                }
            }
            callback.call()
        })
    }else {
        callback.call()
    }
}