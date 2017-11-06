$(function(){

    $("#tijiao").click(function(){
        var id = $("#id").val() || 0;
        var identifier = $("#identifier").val()
        if(identifier == ''){
            alert("抽奖主键不能为空")
            return false
        }
        $.getJSON("admin/prize/checkRepeat/"+identifier+"/"+id,
            {date:new Date().getTime()},
            function(data){
            var exist = data.result.exist;
            if(exist){
                alert("请更换其他的抽奖主键,库里已经存在此抽奖主键")
            }else{
                $("#form").submit()
            }
        })
    })
});

