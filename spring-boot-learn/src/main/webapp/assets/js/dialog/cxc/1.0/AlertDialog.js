//modelLayer.js
ModelLayer.only = null;
ModelLayer.get = function(){
	if (!ModelLayer.only){
		ModelLayer.only = new ModelLayer();
	}
	return ModelLayer.only;
}

function ModelLayer(){
	this._model = $('<div class="modelLayer" style="display:none;"></div>');
	$('body').append(this._model);
	this._isIeModel();
}
ModelLayer.prototype = {
	showModel : function(){
		var _height = jQuery(window).height() > jQuery('body').height() ? jQuery(window).height() : jQuery('body').height();
		var _width = jQuery(window).width();
		this._model.css({width:_width, height:_height}).show();
	},
	hideModel : function(){
		this._model.hide();
	},
	_isIeModel:function(){	//IE6 兼容 select 
		if ($.browser.msie && $.browser.version<7){  
			var _ifrm = $('<iframe class="modelLayerIf"></iframe>');
			this._model.append(_ifrm);
			_ifrm.load(function(){
				$(this).contents().find('body').css('background-color','#000');
			});
		}
	}
};
//drag.js
Drag.instence;
Drag.get = function(area,model){
	if (!Drag.instence){
		Drag.instence = new Drag(area,model);
	}
	return Drag.instence;
}
function Drag(area,model){
	this.drArea = area;
	this.model = model;
	this.win = jQuery(window.document);
	this.startDrag();
}
Drag.prototype = {
	startDrag : function(){
		var _t = this;
		this.win.mousedown(function(e){
			var mx = _t.model.offset().left,
				my = _t.model.offset().top;
			if((e.pageX > mx && e.pageX < (mx+_t.drArea.width())) && (e.pageY > my && e.pageY < (my+_t.drArea.height()))){
				this.l = e.pageX - mx;
				this.h = e.pageY - my;
				_t.moveDrag();
			}
		});
		this.win.mouseup(function(){
			$(this).unbind('mousemove');
		});
	},
	moveDrag : function(){
		var _t = this;
		this.win.mousemove(function(e){
			var left = e.pageX - this.l;
			var top = e.pageY - this.h;
			_t.modelPos(left,top);
		});
	},
	modelPos : function(x,y){
		this.model.css({left:x,top:y});
	}
};
/*
* author : whyboy
* time : 2012.03.03
* name : 弹窗组件
*/
AlertDialog.instences = [];
AlertDialog.get = function(index,options){
	var instence = AlertDialog.instences[index];
	if (!instence){
		AlertDialog.instences[index] = instence = new AlertDialog(index,options);
	}
	return instence;
}

function AlertDialog(index,options){
	this.p = $.extend({
		alertId : 'alert1',	//弹窗ID
		title : '与众弹窗',
		content : '',
		width : 400,	//弹窗宽度
		height: 150,	//弹窗高度
		isBtn : true,	//是否有按钮
		btnClass : ['关闭|guanbi'],  //设置按钮属性[按钮value|按钮class,..]最多支持2个按钮
		createComplete:function(dialog){},//创建完弹窗后事件
		callBack : function(dialog){},//完成弹窗调用事件 
		closeEvent : function(dialog){},//关闭弹窗调用事件
		model : true //是否显示背景遮罩 需要 ModelLayer 类支持
	},options || {});
	this.index = index;
	this._myBtns = [];
	this.creatAlert();
}
AlertDialog.prototype = {
	creatAlert : function(){
		var _t = this;
		var _code = this.creatBtn();
		var html = '<div id="'+this.p.alertId+this.index+'" class="alertLayer" style="display:none;">';
		html +='<div class="alertCons">';
		html +='<div id="'+this.p.alertId+this.index+'_t" class="alertTit">'+this.p.title+'</div>';
		html +='<span id="'+this.p.alertId+this.index+'_c" class="alertClose">X</span>';
		html +='<div class="alertContent" id="'+this.p.alertId+this.index+'_cont">'+this.p.content+'</div>';
		html +=_code;
		html +='</div><div class="bg"></div>';
		html += '</div>';
		$('body').append(html);
		this._model = $('#'+this.p.alertId+this.index);
		this.hTit = $('#'+this.p.alertId+this.index+'_t'); //为后续拖拽做准备,暂无时间制作
		this.closeSpan = $('#'+this.p.alertId+this.index+'_c');
		this.content = $('#'+this.p.alertId+this.index+'_cont');

		if (_code == '') return false;
		if(this._myBtns.length ==1){
			this.closeBtn = $('#'+this._myBtns[0]) || '';
		}else if(this._myBtns.length ==2){
			this.yesBtn = $('#'+this._myBtns[0]) || '';
			this.closeBtn = $('#'+this._myBtns[1]) || '';
		}
		
		this.closeClick(this);
		this.p.createComplete(this);
	},
	fillContent : function(contentHtml,callback){//重新填充内容
//		var f = this.p.content;
		if (contentHtml) this.content.html(contentHtml);
		if(typeof callback == 'function') this.p.callBack = callback;
//		var _t = this;
//		var contentDom = _t.getContentDom();
//		contentDom.html(content);
	},
	getContentDom : function(){
		return this.content;
//		var divDom = $("#"+this.p.alertId+this.index);
//		var contentDom = divDom.find(".alertContent");
//		return contentDom;
	},
	showAlert : function(){
		var _height = $(window).height();
		var _width = $(window).width();
		var _wScroll = $(window).scrollTop();
		if (this.p.model) ModelLayer.get().showModel();
		this._model.css({
			width : this.p.width,
			height : this.p.height,
			top : (_height - this.p.height)/2+_wScroll-50,
			left : (_width - this.p.width)/2
		}).show();
		Drag.get(this.hTit,this._model);
	},
	creatBtn : function(){
		var htm = '';
		if (!this.p.isBtn){
			return htm;
		}
		htm = '<div class="alertBtnDiv">'
		for (var i=0; i<this.p.btnClass.length; i++){
			var v = this.p.btnClass[i].split('|');
			htm += '<input id="'+this.p.alertId+this.index+'_'+v[1]+'" type="button" value="'+v[0]+'" class="alertBtn '+v[1]+'"/>'
			this._myBtns.push(this.p.alertId+this.index+'_'+v[1]);
			
		}
		htm += '</div>';
		if(this._myBtns.length > 2){
			return '最多只能创建2个按钮!';
		}
		return htm;
	},
	closeClick : function(t){
		if (this.closeBtn && this.closeBtn != ''){
			this.closeBtn.click(function(){
				t.hideAlert();
				t.p.closeEvent(t);
			});
		}
		if ( this.closeSpan && this.closeSpan != ''){
			this.closeSpan.click(function(){
				t.hideAlert();
				t.p.closeEvent(t);
			});
		}

		if(this.yesBtn && this.yesBtn !=''){
			this.yesBtn.click(function(){
				//t.hideAlert();
				t.p.callBack(t);
			});
		}
	},
	hideAlert : function(){
		ModelLayer.get().hideModel();
		this._model.hide();
	}
};
