var code = commonAction.fn.queryString("code");
var o = new ClientApp(true);
var data = {
    loading:true,
    loadTip:"正在载入...",
    tipText:'',
    tipStatus:false,
    fileUploading:false,
    isApp:iPlayAppClient.isiPlayApp(),
    // isApp:true
    // uploadStatus:'上传作品参加比赛',
    titleLen:0,
    process:'50',
    showImg:{
        id          :'3434523',    //               (Long)主键
        email       :"1205234@12.com",        //          (String)邮箱
        nickname    :'czj',              //  (String)昵称
        qq          :'2343546456',           //  (String)qq
        title       :'hehe',               // (String)标题
        uploadFileUrl   :'https://vinci.fp.ps.netease.com/file/58c41d0f0699e25818e95e93kHEzOWAq?fop=imageView/1/w/1280/h/1280',               //       (String)上传文件地址
        reUploadTime    :'2'    ,            //     (Integer)重新上传次数
        hasZan          :true,            // (Boolean)是否赞过他人 [{"":"全部"},{"false":"否"},{"true":"是"}]
        receiveZanCount  :'2332'  ,            //        (Integer)获赞数
        auditStatus      :'0'  ,         //     (Integer)审核状态 [{"":"全部"},{"0":"待审核"},{"1":"审核通过"},{"2":"取消资格"}]
        ip               : '123.4334.5656' ,   // (String)ip
        remark           :'wqwq' ,       //    (String)备注字段
        zanWho           :'3434' ,       //     (String)赞过谁
        huoDongId         :'7'  ,      //     (Long)活动id
        createTime        :'234576' ,       //      (Date)创建时间
        uid              :'4555656'     //   (Long)用户id
    },
    userInfo:{
        id : 114543,                        //         (Long)主键
        email : "m15620830142@163.com",     //         (String)邮箱
        nickname : 'czj11',                 //         (String)昵称
        qq :        '1205234934',           //         (String)qq
        title:'我是测试',                    //         (String)标题
        uploadFileUrl:"",                   //         (String)上传文件地址
        reUploadTime:2,                     //         (Integer)重新上传次数
        hasZan:true,                        //         (Boolean)是否赞过他人 [{"":"全部"},{"false":"否"},{"true":"是"}]
        receiveZanCount:432,                //         (Integer)获赞数
        auditStatus:'0',                    //         (Integer)审核状态 [{"":"全部"},{"0":"待审核"},{"1":"审核通过"},{"2":"取消资格"}]
        ip   : '123.34.342.2',              //          (String)ip
        remark : '',                        //          (String)备注字段
        zanWho : '34534',                   //         (String)赞过谁
        huoDongId : '7',                    //         (Long)活动id
        createTime : '',                    //         (Date)创建时间
        uid  :'7033443',                    //         (Long)用户id
        myRank :'2134'                      //          int 用户排名
    },
    imgListL:[
        {
            id          :'3434523',    //               (Long)主键
            email       :"1205234@12.com",        //          (String)邮箱
            nickname    :'jdfsk',              //  (String)昵称
            qq          :'2343546456',           //  (String)qq
            title       :'hehe',               // (String)标题
            uploadFileUrl   :'https://vinci.fp.ps.netease.com/file/58c41d0f0699e25818e95e93kHEzOWAq?fop=imageView/1/w/1280/h/1280',               //       (String)上传文件地址
            reUploadTime    :'2'    ,            //     (Integer)重新上传次数
            hasZan          :true,            // (Boolean)是否赞过他人 [{"":"全部"},{"false":"否"},{"true":"是"}]
            receiveZanCount  :'2332'  ,            //        (Integer)获赞数
            auditStatus      :'0'  ,         //     (Integer)审核状态 [{"":"全部"},{"0":"待审核"},{"1":"审核通过"},{"2":"取消资格"}]
            ip               : '123.4334.5656' ,   // (String)ip
            remark           :'wqwq' ,       //    (String)备注字段
            zanWho           :'3434' ,       //     (String)赞过谁
            huoDongId         :'7'  ,      //     (Long)活动id
            createTime        :'234576' ,       //      (Date)创建时间
            uid              :'4555656'     //   (Long)用户id
        }
    ]
};
var cdn = 'http://test.163.com';
var preloadImg = ['/img/bg1.jpg','/img/bg2.jpg','/img/share-guide.png','/img/slogan.png','/img/logo.png'];
var vm = new Vue({
    el: '#app',
    data: data,
    created:function(){
        var _self = this;
        //    预加载
        // commonAction.fn.imgLoader.init(preloadImg, function () {
        //     _self.loading = false;
        // }, function (p) {
        //
        // }).load();
        _self.loading = false;
    },
    mounted: function () {
        var _self = this;
        var imgFile = $("#imgFile");
        imgFile.on("change",function(){
            var files = this.files;
            if(files.length){
                if(/.(jpg|png|jpeg)$/.test(files[0].name.toLowerCase())){
                    if((( files[0].size / 1024) / 1024 ) < 10 ){
                        // _self.file = files[0];
                        _self.fileVerifyStatus = true;
                        _self.uploadFile(files[0]);
                    }else{
                        _self.fileVerifyStatus = false;
                        _self.showTip("图片太大了，请重新选择");
                    }
                }else{
                    _self.fileVerifyStatus = false;
                    _self.showTip("只能上传图片");
                }
            }
        })
    },
    methods: {
        showTip:function(msg,t){
            var _self = this;
            var _t = t || 2000;
            this.tipText = msg;
            this.tipStatus = true;
            setTimeout(function(){
                _self.tipStatus = false;
            },_t)
        },
        selectPic:function(){
            imgFile.click();
        },
        uploadFile:function(file){
            var _self = this;
            if(this.fileVerifyStatus){
                var fd = new FormData();
                fd.append("myfiles",file);
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener("progress", uploadProgress, false);
                xhr.addEventListener("load", uploadComplete, false);
                xhr.addEventListener("error", uploadFailed, false);
                xhr.addEventListener("abort", uploadCanceled, false);
                xhr.open("POST",jiekou + "/user/commonfile/fileupload/picuploadtest");
                xhr.send(fd);
            }

            function uploadProgress(evt){
                if (evt.lengthComputable) {
                    _self.fileUploading = true;
                    _self.process = Math.round(evt.loaded * 100 / evt.total);
                    // var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                    // document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
                }
                else {

                }
            }
            function uploadComplete(evt){
                _self.showTip("图片上传成功");
                console.log(evt.target.responseText)
            }
            function uploadFailed(){
                _self.showTip("图片上传失败");
            }
            function uploadCanceled(){
                _self.showTip("取消上传");
            }
        }
    },
    filters:{
        checkResult:function(v){
            var _res = "";
            switch(v){
                case 0: _res = "小编拼命审核中...";break;
                case 1: _res = "您已成功参赛";break;
                case 2: _res = "你的作品被退回了";break;
                default: _res = "上传作品，参加比赛";
            }
            return _res;
        }
    }
});




