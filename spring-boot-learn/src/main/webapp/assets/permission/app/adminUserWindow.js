/**
 * 弹窗
 * @returns
 */

function AdminUserWindow(){
}
var instance = null ;
function AdminUserWindow_get(adminUser){
	if(instance==null){
		instance = new AdminUserWindow();
	}
	//创建多例
	var dialog = AlertDialog.get(1,{
		alertId:'windowDialogs',
		title:'编辑用户',
		width : 450,
		height: 300,
		isBtn:true,
		btnClass : ['确定|queding','关闭|guanbi'],
		model : true
	});
		dialog.fillContent(instance.buildContent(adminUser),function(dialog){submitDialog(dialog)});
	return dialog;
};
function submitDialog(dialog){
	var contentDom = dialog.getContentDom();
	var adminUser = {};
	adminUser.id=contentDom.find("input[name='id']").val();
	adminUser.userName=contentDom.find("input[name='userName']").val();
	adminUser.realName=contentDom.find("input[name='realName']").val();
	adminUser.email=contentDom.find("input[name='email']").val();
	adminUser.mobilePhone=contentDom.find("input[name='mobilePhone']").val();
	adminUser.telephone=contentDom.find("input[name='telephone']").val();
	adminUser.password=contentDom.find("input[name='password']").val();
	var url = "admin/permission/adminUserEdit/save";
	$.getJSON(url,{adminUserStr:JSON.stringify(adminUser),date:new Date().getTime()},function(data){
		if(data.message=='ok'){
			alert("保存成功");
			dialog.hideAlert();
			location.reload();
		}else if(data.message=='repeat'){
			alert("此用户名已存在");
		}else{
			alert("初始化异常,请检查网络！");
		}
	});
}
//
AdminUserWindow.prototype.buildContent=function(adminUser){
	var str = "<table>" +
			"<tr><td><input type='hidden' name='id' value='"+adminUser.id+"'></td></tr>" +
			"<tr><td>用 户 名：</td><td><input type='text' name='userName' value='"+adminUser.userName+"'></td></tr>" +
			"<tr><td>用户真名：</td><td><input type='text' name='realName' value='"+adminUser.realName+"'></td></tr>" +
			"<tr><td>密码：</td><td><input type='password' name='password' value=''></td></tr>" +
			"<tr><td>邮箱：</td><td><input type='text' name='email' value='"+adminUser.email+"'></td></tr>" +
			"<tr><td>手机：</td><td><input type='text' name='mobilePhone' value='"+adminUser.mobilePhone+"'></td></tr>" +
			"<tr><td>电话：</td><td><input type='text' name='telephone' value='"+adminUser.telephone+"'></td></tr>" +
			"</table>";
	return str;
};

function editUser(trId){
	var adminUser = buildAdminByTrId(trId);
	var windowDiolag = AdminUserWindow_get(adminUser);
	windowDiolag.showAlert();
}
function buildAdminByTrId(trId){
	var adminUser = {id:'',userName:'',realName:'',email:'',mobilePhone:'',telephone:''};
	if(trId!=null || trId!=''){
		var trDom = $("#"+trId);
		var tds = trDom.children('td');
		tds.each(function(i,e){
			switch(i){
				case 0: adminUser.id=$(this).text();break;
				case 1: adminUser.userName=$(this).text();break;
				case 2: adminUser.realName=$(this).text();break;
				case 3: adminUser.email=$(this).text();break;
				case 4: adminUser.mobilePhone=$(this).text();break;
				case 5: adminUser.telephone=$(this).text();break;
			}
		});
	}
	return adminUser;
}
//删除
function del(trId){
	if(confirm("确定要删除用户吗?")){
		var id = buildAdminByTrId(trId).id;
		var url = "admin/permission/adminUserEdit/del/"+id;
		$.getJSON(url,{id:id,date:new Date().getTime()},function(data){
			if(data.message=='ok'){
				alert("删除成功");
				$("#"+trId).remove();
			}else{
				alert("初始化栏目异常,请检查网络！");
			}
		});
	}
}