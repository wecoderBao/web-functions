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