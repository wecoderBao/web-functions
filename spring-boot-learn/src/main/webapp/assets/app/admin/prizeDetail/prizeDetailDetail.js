$(function(){

    $("#tijiao").click(function(){
        var prizeIdentifier = $("#prizeIdentifier").val()
        if(prizeIdentifier == ''){
            alert("抽奖主键不能为空")
            return false
        }
        var winProbability = $("#winProbability").val();
        if(winProbability == ''){
            alert("抽奖概率不能为空")
        }
        var prizeFrom = $("#prizeFrom").val()
        if(prizeFrom=='1'){
            var prizeValue = $("#prizeValue").val()
            if(prizeValue=='' || parseInt(prizeValue)<=0){
                alert("积分数量不能为空或者0")
                return false;
            }
        }
        var id = $("#id").val()
        $.getJSON("admin/prizeDetail/checkValidate/"+prizeIdentifier+"/"+winProbability,
            {id:id,date:new Date().getTime()},
            function(data){
            var alertInfo = data.result.alertInfo;
            if(alertInfo!=''){
                alert(alertInfo)
            }else{
                $("#form").submit()
            }
        })
    })
});

