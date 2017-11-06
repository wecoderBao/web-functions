var setting = {
	view : {
		addHoverDom : addHoverDom,
		removeHoverDom : removeHoverDom,
		selectedMulti : false
	},
	edit : {
		enable : true,
		drag : {
			autoExpandTrigger : true,
			prev : dropPrev,
			inner : dropInner,
			next : dropNext
		},

		editNameSelectAll : true,
		showRemoveBtn : showRemoveBtn,
		showRenameBtn : showRenameBtn
	},
	data : {
		simpleData : {
			enable : true
		}
	},
	callback : {
		beforeDrag : beforeDrag,
		beforeEditName : beforeEditName,
		beforeRemove : beforeRemove,
		beforeRename : beforeRename,
		onRemove : onRemove,
		onRename : onRename,

		beforeDrag : beforeDrag,
		beforeDrop : beforeDrop,
		beforeDragOpen : beforeDragOpen,
		onDrag : onDrag,
		onDrop : onDrop,
		onExpand : onExpand,
		//双击
		beforeDblClick: zTreeBeforeDblClick,
		onDblClick: zTreeOnDblClick
	}
};

function zTreeBeforeDblClick(treeId, treeNode) {
    return true;//必须返回true 双击事件才有效
};
//双击事件 弹窗
function zTreeOnDblClick(event, treeId, treeNode) {
//	//叶子节点 才进行弹窗
//	if(!(treeNode.getParentNode()==null && treeNode.id==0)){
//		RoleWindow_get(treeNode).showAlert();
//	}
};

var zNodes = [ {
	id : 0,
	pId : -1,
	name : "所有角色",
	open : true,
	orderId : 1,
	rootId : -1,
	linkUrl : ''//超链接
	}
];
var log, className = "dark";
//var treeId = "roleTree";
function beforeDrag(treeId, treeNodes) {
	// return false;
}
function beforeEditName(treeId, treeNode) {
	className = (className === "dark" ? "" : "dark");
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	zTree.selectNode(treeNode);
	return true;
}
function beforeRemove(treeId, treeNode) {
	className = (className === "dark" ? "" : "dark");
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	zTree.selectNode(treeNode);
	if(confirm("确认删除 节点 -- " + treeNode.name + " 吗？")){
		if(treeNode.children != null){
			var len = treeNode.children.length;
			if(len>0){
				alert(treeNode.name+"为父亲节点不允许删除");
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}
function onRemove(e, treeId, treeNode) {
//	alert("删除节点成功 在此处ajax删除数据库此节点即可");
	RoleEdit_get().delNode(treeNode);
}
function beforeRename(treeId, treeNode, newName) {
	className = (className === "dark" ? "" : "dark");
	if (newName.length == 0) {
		alert("节点名称不能为空.");
		var zTree = $.fn.zTree.getZTreeObj(treeId);
		setTimeout(function() {zTree.editName(treeNode)}, 10);
		return false;
	}else if(newName.length >50){
		alert("节点名称不能超过50个字符");
		return false;
	}
	return true;
}
function onRename(e, treeId, treeNode) {
	RoleEdit_get().renameNode(treeNode);
//	alert("改过后的名：" + treeNode.name + "不用在此处ajax更改数据库，最后统一提交更改");
}

function showRemoveBtn(treeId, treeNode) {
	return !treeNode.isParent;// 所以叶子节点都可以删除
}
function showRenameBtn(treeId, treeNode) {
	return true;// 所有节点都能改名
}

// 添加节点
var newCount = 1;
function addHoverDom(treeId, treeNode) {
	var sObj = $("#" + treeNode.tId + "_span");
	if (treeNode.editNameFlag || $("#addBtn_" + treeNode.id).length > 0)
		return;
	var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
	sObj.after(addStr);
	var btn = $("#addBtn_" + treeNode.id);
	if (btn)
		btn.bind("click", function() {

			var zTree = $.fn.zTree.getZTreeObj(treeId);
			var newNode = {
				id : (100 + newCount),
				pId : treeNode.id,
				name : "new node" + (newCount++),
				linkUrl:''//自定义属性
			};
			// 处理与众软件特殊的rootId
			if (treeNode.level == 0) {
				newNode.rootId = 0;
			} else if (treeNode.level == 1) {
				newNode.rootId = treeNode.id;
			} else if (treeNode.level > 1) {
				newNode.rootId = treeNode.rootId;
			}
			if (treeNode.children != null) {
				var len = treeNode.children.length;
				if(len>0){
					var orderId = (treeNode.children[len - 1]).orderId;// 取最大的orderIdId
					newNode.orderId = orderId + 1;// 最大+1 避免因删除影响新增的不是最大
				}else{
					newNode.orderId = 1;
				}
			} else {
				newNode.orderId = 1;
			}

			zTree.addNodes(treeNode, newNode);
			var idx = treeNode.children.length - 1;
			var newNodeJson = treeNode.children[idx];
//			alert("添加一个节点成功新节点名称" + newNodeJson.name + " 父亲id" + treeNode.id
//					+ " 在此处ajax保存到数据库返回id后更新id");
			RoleEdit_get().addNode(newNodeJson);
			return false;
		});
};

function removeHoverDom(treeId, treeNode) {
	$("#addBtn_" + treeNode.id).unbind().remove();
};
function selectAll() {
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	zTree.setting.edit.editNameSelectAll = $("#selectAll").attr("checked");
}

function dropPrev(treeId, nodes, targetNode) {
	var pNode = targetNode.getParentNode();
	if (nodes[0].getParentNode() != pNode) {// 同一个父亲才能拖拽
		return false;
	} else {
		return true;
	}
}
function dropInner(treeId, nodes, targetNode) {// 不允许拖进去
	return false;
}
function dropNext(treeId, nodes, targetNode) {
	var pNode = targetNode.getParentNode();
	if (nodes[0].getParentNode() != pNode) {// 同一个父亲才能拖拽
		return false;
	} else {
		return true;
	}
}

var log, className = "dark", curDragNodes, autoExpandNode;
function beforeDrag(treeId, treeNodes) {
	className = (className === "dark" ? "" : "dark");
	for ( var i = 0, l = treeNodes.length; i < l; i++) {
		if (treeNodes[i].drag === false) {
			curDragNodes = null;
			return false;
		} else if (treeNodes[i].parentTId
				&& treeNodes[i].getParentNode().childDrag === false) {
			curDragNodes = null;
			return false;
		}
	}
	curDragNodes = treeNodes;
	return true;
}
function beforeDragOpen(treeId, treeNode) {
	autoExpandNode = treeNode;
	return true;
}
function beforeDrop(treeId, treeNodes, targetNode, moveType, isCopy) {
	className = (className === "dark" ? "" : "dark");
	return true;
}
function onDrag(event, treeId, treeNodes) {
	className = (className === "dark" ? "" : "dark");
}
// 拖动完成放开时更新orderId
function onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy) {
	// 重新排序
	className = (className === "dark" ? "" : "dark");
	if (targetNode == null || typeof targetNode == 'undefined') {// 解决找不到targetNode问题
		return;
	}
	var pNode = targetNode.getParentNode();
	sortChildren(pNode);
//	alert("我已经自动排好序了");
}
function sortChildren(pNode) {
	var children = pNode.children;
	if (children != null && children.length > 0) {
		for ( var i = 0; i < children.length; i++) {
			children[i].orderId = i + 1;
		}
	}
}
function onExpand(event, treeId, treeNode) {
	if (treeNode === autoExpandNode) {
		className = (className === "dark" ? "" : "dark");
	}
}

function setTrigger() {
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	zTree.setting.edit.drag.autoExpandTrigger = $("#callbackTrigger").attr(
			"checked");
}

$(document).ready(function() {
	RoleEdit_get().initData(setting);
});
function submit(){
	RoleEdit_get().submit();
}
