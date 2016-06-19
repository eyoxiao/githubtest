(function(window){
	var jQuery = function(selector){
		return new jQuery.prototype.init(selector);
	};
	jQuery.fn=jQuery.prototype = {
		version:"0.0.1",
		constructor:jQuery,
		init:function(selector){
			if(typeof selector === "string")
			{
				//just assume that it is a valid CSS selector
				//'div','[div].class','[div]#id'
				this.elements = document.querySelectorAll(selector);
			//handle DOM element
			}else if(selector.nodeType){
				this.elements = selector;
			}
			for(method in jQuery.prototype){
				this[method] = jQuery.prototype[method];
			}
		},
		hide:function(){
			if(this.elements.length){
				for(var i=0;i<this.elements.length;i++){
					this.elements[i].style.display = "none";
				}
			}else{
				this.elements.style.display = "none";
			}
		},
		show:function(){
			if(this.elements.length){
				for(var i=0;i<this.elements.length;i++){
					this.elements[i].style.display = "block";
				}
			}else{
				this.elements.style.display = "block";
			}
		},
		click:function(callback){
			if(this.elements.length){
				for(var i=0;i<this.elements.length;i++){
					this.elements[i].onclick = callback;
				}
			}else{
				this.elements.onclick = callback;
			}
		}

	};
	window.jQuery = window.$=jQuery;

}(window));