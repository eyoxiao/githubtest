(function(global,factory){
	if(typeof module === "object" && typeof module.exports === "object"){
		module.exports=global.document?
		factory(global,true):
		function(w){
			if(!w.document){
				throw new Error("jQuery requires a window with a document" );
			}
			return factory(w);

		}
	}else{
		factory(global);
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
var 
	version = 0.0.1,

	jQuery = function(selector,context){
		return new jQuery.fn.init(select,context);
    };

jQuery.fn=jQuery.prototype={
	jquery:version,
	constructor:jQuery,
	selector: "",
	length:0
};

jQuery.extend = jQuery.fn.extend = function(){

};


var
	document = window.document,
	//?: do no save the first group, it equals match[0]
	//<[\w\W]+>)[^>]*
	//#([\w-]*) used for id="***"
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	init = jQuery.fn.init = function(selector,context){
		var match,elem;
		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		//HANDLE HTML Strings
		if(typeof selector === "string"){
			if(selector.charAt(0)==="<" && selector.charAt(selector.length-1) === ">" && selector.length >=3 ){
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null,selector,null];
			}else{
				//[rquickExpr,<[\w\W]+>,[\w-]*]
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if(match &&(match[1] || !context)){
				if(match[1]){

				}else{
					elem = document.getElementById(match[2]);
					if(elem && elem.parentNode){
						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}
					this.context = document;
					this.selector = selector;
					return this;
				}
			}
		// HANDLE: $(DOMElement)
		//$(document)
		}else if(selector.nodeType){
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		// HANDLE: $(function)
		// Shortcut for document ready
		}else if()
	};
init.prototype = jQuery.fn;




if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
}));