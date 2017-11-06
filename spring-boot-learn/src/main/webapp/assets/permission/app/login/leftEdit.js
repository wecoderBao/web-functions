/**
 * 注意 树的父亲id为 pId 而java端为pid 在此处做好兼容
 * @returns
 */

function LeftEdit(){
	this.treeId="moduleTree";
}
var instance = null ;
var treeSetting = setting;//setting见roleModuleTree.js定义的全局变量
function LeftEdit_get(){
	if(instance==null){
		instance = new LeftEdit();
	}
	return instance;
};
LeftEdit.prototype.initData=function(setting,userId){
	var url = "admin/index/getInitData";
	var _t = this;
	$.getJSON(url,{date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			var initData = data.result;
			if(initData!=null && initData.length>0){
				for(var i = 0;i<initData.length;i++){
					var data = initData[i];
					data.pId = data.pid;//转化下父亲id数据格式 兼容
				}
			}else{
				initData = [];
			}
			var zuxian = {
				id : 0,
				pId : -1,
				name : "所有模块",
				open : true,
				orderId : 1,
				rootId : -1,
				nocheck:true//祖先无复选框
				};
			initData.push(zuxian);//追加祖先
			//加上所有栏目自定义
			$.fn.zTree.init($("#"+_t.treeId), setting, initData);
		}else{
			alert("初始化栏目异常,请检查网络！");
		}
	});
};
