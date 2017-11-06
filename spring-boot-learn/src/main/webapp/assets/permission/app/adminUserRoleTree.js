var setting = {
	check: {//选择树
		enable: true
	},
	data : {
		simpleData : {
			enable : true
		}
	}
};

var zNodes = [ {
	id : 0,
	pId : -1,
	name : "所有模块",
	open : true,
	orderId : 1,
	rootId : -1
	}
];

$(document).ready(function() {
	AdminUserRoleEdit_get().initData(setting,$("#userId").val());
});
function submit(){
	AdminUserRoleEdit_get().submit();
}
