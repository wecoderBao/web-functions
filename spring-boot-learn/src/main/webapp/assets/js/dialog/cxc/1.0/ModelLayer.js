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