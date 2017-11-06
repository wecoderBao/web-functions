$(document).ready(function () {
    var _urlRoot = "",
        __ISDEBUG = false,
        round = 1,
        nick = "",
        uid = "",
        nolottery = true,
        name = "",
        phone = "",
        address = "",
        did = "",
        pid = "ckxt",
        prizeWinId = '',
        prizeDetailId = '',

        prizeListTicket = [],
        prizeListNote = [],
        prizeListMask = [],
        prizeListPhone = [],
        $res1 = $("#res1"),
        $name = $res1.find("#name"),
        $phone = $res1.find("#phone"),
        $address = $res1.find("#address"),
        $submit = $res1.find("#submit"),
        $dialog = $("#dialog"),
        $time = $("#time"),
        $btnLottery = $("#btnLottery"),
        indexAction = (function () {
            var fn = {
                    _doAjax: function (url, data, success, error) {
                        error = typeof error === "function" ? error : this.ajaxError;
                        var _index = 0;
                        $.each(data, function (n, v) {
                            if (_index == 0 && _urlRoot.indexOf("?") == -1) {
                                url += "?" + n + "=" + v;
                            } else {
                                url += "&" + n + "=" + v;
                            }
                            _index++;
                            if (__ISDEBUG) {
                                alert("_doAjax:" + n + "=" + v);
                            }
                        });
                        return $.ajax({
                            url: _urlRoot + url,
                            data:{date:new Date().getTime()},
                            //data: data,
                            dataType: "json",
                            // jsonp: 'callBack',
                            // jsonpCallback: 'callback',
                            success: function (result) {
                                success && success(result);
                            },

                            error: function () {
                                error && error({
                                    msg: '网络错误，请刷新重试'
                                });
                            }
                        });
                    },
                    _fakeAjax: function (callback, data) {
                        return setTimeout(function () {
                            callback(data);
                        }, 500);
                    },
                },
                postInfo = function () {
                    fn._doAjax('web/openid_prize/update_user_win_message', {
                        huoDongId:7,
                        prizeWinId:prizeWinId,
                        prizeDetailId:prizeDetailId,
                        'userName': name,
                        'address': address,
                        'phone': phone
                    }, function (data) {
                        if(data.code == 0){
                            $dialog.show().find(".d-wrap").hide()
                                .end().find("#res2").show().find(".d-tit").html("提交成功,请耐心等待发奖").show();
                        }else{
                            $dialog.hide();
                            $(".submitFail").show();
                            $(".submitFail").click(function(){
                                $dialog.show().find(".d-wrap").hide()
                                    .end().find("#res1").show();
                            })
                        }
                    });
                },
                showResult = function (res) {
                    if (res.sendToUserMethod+"" == "1") { //实物奖
                        name = res.userName;
                        phone = res.userPhone;
                        address = res.userAddress;
                        did = res.prizeDetailId;
                        prizeWinId = res.prizeWinId;
                        prizeDetailId = res.prizeDetailId;
                        // token = res.token;
                        if (name == "" || phone == "" || address == "" || !name || !phone) {
                            $dialog.show().find(".d-wrap").hide()
                                .end().find("#res1").show().find(".js_prize").html(res.name);
                        } else {
                            $dialog.show().find(".d-wrap").hide()
                                .end().find("#res3").show().find(".js_prize").html(res.name);
                            $dialog.find("#res3").find(".js_name").html(res.userName)
                                .end().find(".js_phone").html(res.userPhone)
                                .end().find(".js_address").html(res.userAddress);
                        }

                    } else {   //虚拟奖
                        $dialog.show().find(".d-wrap").hide()
                            .end().find("#res0").show().find(".js_prize").html(res.name)
                            .end().find("#code").html(res.prizeDetailStoreCode);
                    }
                },
                lotteryAnimation = function (data) {
                    if(data.code==-1 || data.code==-2){
                        $("#remindMessage").text(data.message)
                        return
                    }
                    $dialog.hide();
                    var message = {
                        "01": "找不到此抽奖活动",
                        "02": "不在抽奖活动时间内",
                        "03": "抽奖未开启",
                        "04": "此用户今日抽奖次数已用完",
                        "05": "此用户抽奖次数已用完",
                        "06": "此IP今日抽奖次数已用完",
                        "07": "此IP抽奖次数已用完",
                        "08": "抽奖失败",
                        "09": "奖品已达到上限",
                        "10": "很遗憾未中奖"
                    };
                    var data = data.info
                    if (data.message == "100" || data.message == "10") {
                        var angEnd;
                        if (data.message === "100") {
                            prizeWinId = data.result.prizeWinId;
                            prizeDetailId = data.result.prizeDetailId;
                            angEnd = 1440 * round + 72 * parseInt(data.result.img);
                        } else {
                            angEnd = 1440 * round + 72;
                        }
                        $("#award").rotate({
                            duration: 6000,
                            animateTo: angEnd,
                            callback: function () {
                                nolottery = true;
                                console.log("抽奖结束.....");
                                if (data.message == '100') {
                                    showResult(data.result);
                                } else {
                                    $dialog.show().find(".d-wrap").hide()
                                        .end().find("#res2").show().find(".d-tit").html("很遗憾，您未中奖");
                                }
                            }
                        });
                        round++;
                    } else {
                        nolottery = true;
                        var msg = message[data.message]
                        $("#remindMessage").text(msg)
                        $dialog.show();
                        /* if (data.message == "05") {
                         $dialog.show().find(".d-wrap").hide()
                         .end().find("#res2").show().find(".d-tit").html("已参与过抽奖啦！").show();
                         }
                         console.log(message[data.message]);*/
                    }
                },
                startLottery = function () {
                    console.log("抽奖中.....");
                    nolottery = false;

                    //显示昵称校验页面
                    $dialog.show().find(".d-wrap").hide().end().find("#lottery").show();


                },
                getPrizeInfo = function () {
                    function getInfo(data) {
                        // data.result = [];
                        if (data.result.length > 0) {
                            showResult(data.result[0])
                        } else {
                            //查询用户的中奖物品
                            fn._doAjax("web/zoo_user/list/1/1", {
                                "huoDongId":7,
                                'email': uid
                            }, function (data) {
                                if(!data.info.pageList || data.info.pageList.length<0){
                                    startLottery();
                                }else {
                                    $dialog.show().find(".d-wrap").hide()
                                        .end().find("#res2").show().find(".d-tit").html("已参与过抽奖啦！").show();
                                }
                            })
                        }
                    }

                    //查询用户的中奖物品
                    fn._doAjax("ajax", {
                        "api": "winUserListApi",
                        'pid': pid,
                        'uid': uid,
                        'limit': 1
                    }, getInfo)
                },
                addEvent = function () {
                    $('#start').click(function (e) {
                        if (nolottery) {
                            uid = $("#userEmail").val()
                            if (uid!='') {  //登录验证
                                // uid = $.cookie("P_INFO").split("|")[0];  //获取用户id
                                if (nolottery) {
                                    getPrizeInfo();
                                }
                            } else {
                                // iPlayLogin.loginTool.loginShake();
                                $dialog.show().find(".d-wrap").hide().end().find("#login").show();
                            }
                        }
                        e = e || event;
                        e.stopPropagation();
                    });
                    $("#close").click(function () {
                        $dialog.hide();
                        nolottery = true;
                    });
                    $submit.click(function () {
                        name = encodeURIComponent($.trim($name.val()));
                        phone = encodeURIComponent($.trim($phone.val()));
                        address = encodeURIComponent($.trim($address.val()));
                        if (name && phone && address) {
                            $submit.removeAttr("disabled");
                        } else {
                            $submit.attr("disabled", "disabled");
                            return false;
                        }
                        postInfo();
                    });
                    $("#res1 input").on("keyup blur",function () {
                        name = encodeURIComponent($.trim($name.val()));
                        phone = encodeURIComponent($.trim($phone.val()));
                        address = encodeURIComponent($.trim($address.val()));
                        if (name && phone && address) {
                            $submit.removeAttr("disabled");
                        } else {
                            $submit.attr("disabled", "disabled");
                        }
                    });
                    $("#btnLottery").click(function(){    //开始抽奖
                        fn._doAjax("web/openid_prize/prize", {
                            "prizeIdentifier": pid,
                            "nickName": encodeURIComponent($.trim($("#nick").val())),
                        }, lotteryAnimation);
                    });

                    $("body").on("copy", "#copy", function (e) {
                        e.clipboardData.clearData();
                        e.clipboardData.setData("text/plain", $.trim($("#code").html()));
                        window.open("http://www.gewara.com/");
                        e.preventDefault();
                    });
                    $("#nick").on("keyup blur",function(){  //校验昵称
                        var nick = $.trim($(this).val());
                        if(nick != ""){
                            $btnLottery.removeAttr("disabled");
                        }else{
                            $btnLottery.attr("disabled","disabled");
                        }
                    })
                },
                setList = function (dom, data, max) {
                    var _html = "";
                    var _index;
                    if (data.length > 0) {
                        for (var i = 0; i < data.length && i < max; i++) {
                            _index = i + 1;
                            if (_index % 5 == 0 && _index != 1) {
                                _html += '<li class="w100">' + data[i].prizeWinRemark + '</li>';
                            } else {
                                _html += '<li>' + data[i].prizeWinRemark + '</li>';
                            }
                        }
                        dom.html(_html);
                        dom.closest(".js_wrap").show();
                    } else {
                        dom.closest(".js_wrap").hide();
                    }
                },
                init = function () {

                    addEvent();
                    if (__ISDEBUG) {
                        _urlRoot = "";
                    } else {
                        // _urlRoot = "http://app.game.163.com";
                        _urlRoot = "";
                    }
                    fn._doAjax("ajax", {
                        "api": "winUserListApi",
                        'pid': pid,
                        'limit': 100
                    }, function (data) {
                        if (data.result.length > 0) {
                            $time.html(data.result[0].createTime);
                            var res = data.result;
                            var len = data.result.length;
                            for (var i = 0; i < len; i++) {
                                switch (res[i].img) {
                                    case '0':
                                        prizeListMask.push(res[i]);
                                        break;
                                    case '2':
                                        prizeListNote.push(res[i]);
                                        break;
                                    case '3':
                                        prizeListPhone.push(res[i]);
                                        break;
                                    case '4':
                                        prizeListTicket.push(res[i]);
                                        break;
                                }
                            }
                        }
                        setList($("#note_list"), prizeListNote, 10);
                        setList($("#phone_list"), prizeListPhone, 10);
                        setList($("#mask_list"), prizeListMask, 10);
                        setList($("#ticket_list"), prizeListTicket, 50);
                    })
                };
            return {
                init: init
            }
        })();
    indexAction.init();
});
