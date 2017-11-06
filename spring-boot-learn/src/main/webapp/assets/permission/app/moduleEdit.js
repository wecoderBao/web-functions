/**
 * 注意 树的父亲id为 pId 而java端为pid 在此处做好兼容
 * @returns
 */

function ModuleEdit(){
	this.treeId="moduleTree";
}
var moduleEdit = null ;
function ModuleEdit_get(){
	if(moduleEdit==null){
		moduleEdit = new ModuleEdit();
	}
	return moduleEdit;
};
ModuleEdit.prototype.initData=function(setting){
	var url = "admin/permission/moduleTree/getInitData";
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
				linkUrl:''
				};
			initData.push(zuxian);//追加祖先
			//加上所有栏目自定义
			$.fn.zTree.init($("#"+_t.treeId), setting, initData);
		}else{
			alert("初始化异常,请检查网络！");
		}
	});
};
//添加节点
//nodeTree :当前新增的节点 已经加入了树中
ModuleEdit.prototype.addNode = function(nodeTree){
	var topicDto={};
	topicDto.name=nodeTree.name;
	topicDto.orderId=nodeTree.orderId;
	topicDto.rootId = nodeTree.rootId;
	topicDto.pid = nodeTree.getParentNode().id;
	topicDto.linkUrl = nodeTree.linkUrl;
	var url = "admin/permission/moduleTree/addNode";
//	var _t = this;
	$.getJSON(url,{treeStr:JSON.stringify(topicDto),date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			nodeTree.id = data.result;
		}else{
//			var treeObj = $.fn.zTree.getZTreeObj(_t.treeId);
//			treeObj.removeNode(nodeTree);//删除此节点
			alert("添加失败请重新尝试");
			location.reload();//不执行回滚 刷新页面重来
		}
	});
}
;
//删除节点
ModuleEdit.prototype.delNode = function(nodeTree){
	if(nodeTree.getParentNode()==null && nodeTree.id==0){
		alert(nodeTree.name+"不允许删除");
		location.reload();//不执行回滚 刷新页面重来
		return;
	}
	var url = "admin/permission/moduleTree/delNode";
	$.getJSON(url,{id:nodeTree.id,date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			
		}else{
			alert("删除失败请重新尝试");
			location.reload();//不执行回滚 刷新页面重来
		}
	});
}
;
//改名
ModuleEdit.prototype.renameNode = function(nodeTree){
	var topicDto={};
	topicDto.id = nodeTree.id;
	topicDto.name=nodeTree.name;
	topicDto.orderId=nodeTree.orderId;
	topicDto.rootId = nodeTree.rootId;
	var parent = nodeTree.getParentNode();
	if(parent!=null){
		topicDto.pid = parent.id;
	}else{
		alert(nodeTree.name+"不允许改名");
		location.reload();//不执行回滚 刷新页面重来
		topicDto.pid = -1;//根目录跟目录不允许改名
		return ;
	}
	var url = "admin/permission/moduleTree/renameNode";
	$.getJSON(url,{treeStr:JSON.stringify(topicDto),date:new Date().getTime()},function(data){
		if(data.message=='ok'){
		}else{
			alert("添加失败请重新尝试");
			location.reload();//不执行回滚 刷新页面重来
		}
	});
}
;
//提交保存拖动后的排序
ModuleEdit.prototype.submit = function(){
	var url = "admin/permission/moduleTree/saveList";
	var treeObj = $.fn.zTree.getZTreeObj(this.treeId);
	var nodes = treeObj.getNodes();
	var nodesArray = treeObj.transformToArray(nodes);
	var array = [];
	for(var i =0 ;i<nodesArray.length;i++){
		var nodeTree = nodesArray[i];
		var topicDto={};
		topicDto.id = nodeTree.id;
		topicDto.name=nodeTree.name;
		topicDto.orderId=nodeTree.orderId;
		topicDto.rootId = nodeTree.rootId;
		topicDto.linkUrl = nodeTree.linkUrl;
		var parent = nodeTree.getParentNode();
		if(parent!=null){
			topicDto.pid = parent.id;
		}else{//跟节点无需保存
			topicDto.pid =-1;
			continue;
		}
		array.push(topicDto);
	}
	
	$.getJSON(url,{treeStr:JSON.stringify(array),date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			alert("保存成功");
			location.reload();//不执行回滚 刷新页面重来
		}else{
			alert("保存失败请重新尝试");
		}
	});
}
;