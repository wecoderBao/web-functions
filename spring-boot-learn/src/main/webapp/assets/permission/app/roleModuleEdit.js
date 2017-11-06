/**
 * 注意 树的父亲id为 pId 而java端为pid 在此处做好兼容
 * @returns
 */

function RoleModuleEdit(){
	this.treeId="moduleTree";
}
var instance = null ;
var treeSetting = setting;//setting见roleModuleTree.js定义的全局变量
function RoleModuleEdit_get(){
	if(instance==null){
		instance = new RoleModuleEdit();
	}
	return instance;
};
RoleModuleEdit.prototype.initData=function(setting,roleId){
	var url = "admin/permission/roleModule/getInitData";
	var _t = this;
	$.getJSON(url,{roleId:roleId,date:new Date().getTime()},function(data){
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
			alert("初始化异常,请检查网络！");
		}
	});
};
 
//提交保存
RoleModuleEdit.prototype.submit = function(){
	var url = "admin/permission/roleModule/saveList";
	var treeObj = $.fn.zTree.getZTreeObj(this.treeId);
	var nodesArray = treeObj.getCheckedNodes(true);//获取选中的
	var moduleIds = "";
	for(var i =0 ;i<nodesArray.length;i++){
		var nodeTree = nodesArray[i];
		if(parent!=null){//根节点root不保存
			moduleIds +=nodeTree.id+",";
		}
	}
	var roleId = $("#roleSelect").val();
	if(roleId=='' || roleId=='0'){
		alert("请选择角色");
		return false;
	}
	if(moduleIds!=''){
		moduleIds=','+moduleIds;
	}
	$.getJSON(url,{roleId:roleId,moduleIds:moduleIds,date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			alert("保存成功");
		}else{
			alert("保存失败请重新尝试");
		}
	});
}
;
//联动加载 配置过的模块
function roleSelectChange(t){
	var roleId = $(t).val();
	var instance = RoleModuleEdit_get();
	instance.initData(treeSetting,roleId);
}