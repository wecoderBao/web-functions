//version 2017-02-17
/**
 * 表单操作历史纪录 攻回滚使用
 */
//构造历史下拉表单
function historySelectShow(){
    $("#historyOperateRecords").removeClass('hidden');
}
//表单切换
function historySelectChange(_t){
    var logAdminOperateId =  $(_t).val();
    if(logAdminOperateId!=''){
        var url = location.href
        if(url.indexOf("?")==-1){
            url = url+"?"
        }
        if(url.indexOf("&logAdminOperateId=")!=-1){
            var newArr = []
            var arr = url.split("&");
            for(var i=0;i<arr.length;i++){
                if(arr[i].indexOf("logAdminOperateId=")==-1){
                    newArr.push(arr[i])
                }
            }
            url = newArr.join('&')
        }
        window.location.href=url+"&logAdminOperateId="+logAdminOperateId
    }
}