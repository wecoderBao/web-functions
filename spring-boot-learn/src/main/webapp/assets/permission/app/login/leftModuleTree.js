var setting = {
	data : {
		key:{
			url:'linkUrl'//链接树,
		},
		simpleData : {
			enable : true
		}
	}
};

var zNodes = [ {
	id : 0,
	pId : -1,
	name : "所有角色",
	open : true,
	orderId : 1,
	rootId : -1
	}
];

$(document).ready(function() {
	LeftEdit_get().initData(setting);
});

