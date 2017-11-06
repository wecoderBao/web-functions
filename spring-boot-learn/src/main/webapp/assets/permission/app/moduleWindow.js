/**
 * 弹窗
 * @returns
 */

function ModuleWindow(){
}
var moduleWindow = null ;
function ModuleWindow_get(treeNode){
	if(moduleWindow==null){
		moduleWindow = new ModuleWindow();
	}
	//创建多例
	var dialog = AlertDialog.get(1,{
		alertId:'alert1',
		title:'编辑功能链接',
//		content:moduleWindow.buildContent(treeNode),
		width : 450,
		height: 150,
		isBtn:true,
		btnClass : ['确定|queding','关闭|guanbi'],
		//callBack : function(dialog){submitDialog(dialog,treeNode);},
		model : true
	});
	dialog.fillContent(moduleWindow.buildContent(treeNode),function(dialog){submitDialog(dialog,treeNode);});
	return dialog;
};
function submitDialog(dialog,treeNode){
	var contentDom = dialog.getContentDom();
	var moduleHref = contentDom.find("input[name='moduleHref']").val();
	var id = treeNode.id;
	var url = "admin/permission/moduleTree/saveLinkUrl";
	$.getJSON(url,{id:id,linkUrl:moduleHref,date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			treeNode.linkUrl = moduleHref;
			alert("保存成功");
			dialog.hideAlert();
		}else{
			alert("初始化异常,请检查网络！");
		}
	});
}
//
ModuleWindow.prototype.buildContent=function(treeNode){
	return "功能链接：<input type='text' size='45' name='moduleHref' value='"+treeNode.linkUrl+"'/>";
};