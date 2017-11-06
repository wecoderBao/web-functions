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
	rootId : -1,
	linkUrl : ''//超链接
	}
];

$(document).ready(function() {
	RoleModuleEdit_get().initData(setting,0);
});
function submit(){
	RoleModuleEdit_get().submit();
}
