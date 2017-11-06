var constants = {
    openAppUri : 'iplay://?type=7&url='+activeUrl,  //andorid打开 回调地址
    openIosAppUri : 'http://i.play.163.com/ios.html?type=7&url='+activeUrl, //ios打开
    appUrl : 'http://i.play.163.com/',
    shareRoot : 'http://play.163.com/special/bcard-share-2016/'
}
function ClientApp(s){
    _isWx = /micromessenger/i.test(navigator.userAgent.toLowerCase());
    this.body = $('body');
    this.wapInfo = ClientAppTools.getWapInfo();
    this.isShowTip = s;
    this.init();
}

ClientApp.prototype.init = function(){

    if(iPlayAppClient.isiPlayApp()){


        if(this.wapInfo.device == 'ios'){
            if(this.wapInfo.version < 200){
                this.diaShow('','\u9700\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c','\u53bb\u5347\u7ea7',function(b){    //需升级到最新版本
                    b.attr('href','http://i.play.163.com/')
                })
                return false;
            }
        }else{
            if(this.wapInfo.version < 200){
                this.diaShow('','\u9700\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c','\u53bb\u5347\u7ea7',function(b){
                    b.attr('href','http://i.play.163.com/')
                })
                return false;
            }
        }

        if(!ClientAppTools.isLogin()){

            iPlayAppClient.login(function(ticket){
                if(ticket) ClientAppTools.loginLoad(ticket);

            })

            setTimeout(function(){
                iPlayAppClient.loginDia(function (ticket) {
                    location.reload();
                })
            },800)

        }else{
            // if(typeof window.InnateWebView != 'undefined') window.InnateWebView.saveCookie();
        }
    }
};




ClientApp.prototype.openApp = function(s,u){
    if(u){
        constants.openIosAppUri = 'http://i.play.163.com/ios.html?type=7&url='+ u;
        constants.openAppUri = 'iplay://?type=7&url='+ u;
    }else{
        constants.openIosAppUri = 'http://i.play.163.com/ios.html?type=7&url='+ activeUrl;
        constants.openAppUri = 'iplay://?type=7&url='+ activeUrl;
    }

    if( !iPlayAppClient.isiPlayApp() ){
        if(this.wapInfo.device == 'ios'){
            if(this.wapInfo.iosSystem >= 900){
                ClientAppTools.openApp(constants.openIosAppUri,function(p){});     //打开app
                if(s) return false;
            }
        }
        ClientAppTools.openApp(constants.openAppUri,function(p){});
        this.diaShow('','\u8bf7\u7528\u7231\u73a9\u0061\u0070\u0070\u6253\u5f00','\u6253\u5f00',function(b){  //请用爱玩APP打开
            this.wantOpen(b);
        }.bind(this))

    }
};

ClientApp.prototype._creatDiaHtml = function(t,c,b){
    var html = [],
        tstr = t || '\u63d0\u793a',  //提示
        cstr = c || '',
        bstr = b || '';
    html.push('<div class="m-clientDialog">')
    html.push('<dl>')
    html.push('<dt class="t">'+tstr+'</dt>')
    html.push('<dd class="c">'+cstr+'</dd>')
    if(bstr) html.push('<dd class="b"><a href="javascript:;" class="J_btn btn">'+bstr+'</a></dd>')
    html.push('</dl>')
    html.push('</div>')
    return $(html.join(''))
}

ClientApp.prototype.diaShow = function(t,c,b,cb){
    // if(this.isShowTip){
        this.html = this._creatDiaHtml(t,c,b);
        this.model = $('<div class="m-modelLayer"><i class="m-modelLayer-bg"></i></div>');
        this.body.append(this.html).append(this.model);
        var _winheight = $(window).height(),
            _height = this.html.height();
        this.html.css({
            top : (_winheight - _height)/2-50,
        });
        if(cb) cb(this.html.find('.J_btn'));
    // }
}

ClientApp.prototype.diaHide = function(){
    this.html.remove();
    this.model.remove();
}

ClientApp.prototype.diaShowTip = function(){
    this.model.append('<s></s>')
}

ClientApp.prototype.wantOpen = function(d){
    d.click(function () {
        d.text('\u8bf7\u7a0d\u540e\u002e\u002e\u002e');
        ClientAppTools.openApp(constants.openAppUri, function (p) {
            if (p) location.href = constants.appUrl;
        });
    })

}


ClientApp.prototype.wantDiaOpen = function(d){
    d.click(function(){
        iPlayAppClient.loginDia(function (ticket) {
            location.reload();
        })
    })
}

