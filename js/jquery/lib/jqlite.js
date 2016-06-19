var foo = function(arg){
	console.log(arg);
};

var $ = function(selector){
   return new $.prototype.init(selector);
};

$.prototype = {
   Constructor:$,
   init:function(selector){
      this.el = document.querySelector(selector);
      for(var method in $.prototype){
         this[method] = $.prototype[method];
      }
   },
   bind:function(event,fn){
         this.el.addEventListener(event,fn);
       },
       hide:function(){
         this.el.style.display = 'none'
       },
       show:function(){
         this.el.style.display = 'block';
       },
       val:function(arg){
         if(typeof arg == 'string'){
         this.el.value = arg;
          }
          else{
            return this.el.value;
          }
        },
        append:function(arg){
       reg = /^<(\w+)>(.*)<\/\1>$/,
       match = reg.exec(arg),
       li = document.createElement(match[1]),
       content = match[2];
       li.innerText = content;
       this.el.appendChild(li);
        },
        slideDown:function(){
          this.el.style.overflow = 'auto';
          var style = document.defaultView.getComputedStyle(el);
          var height=parseInt(style['height']);
          for (var i=0;i<height;i++){
              foo(i);
         }
         function foo(h){
           setTimeout(function(){
           //console.log(h);
           this.el.style.height = h + "px";
           },h*20);
        };
      } 
}
$.getJSON = function(url,data,success){
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(){
      //console.log('finish');
      if(xhr.readyState == 4 && xhr.status == 200){
         success(JSON.parse(xhr.responseText));
      }
   }
   xhr.open('get',url,true);
   xhr.send(data);
};

/*
   el.hide = function(){
   	el.style.display = 'none'
   };
   el.show = function(){
   	el.style.display = 'block';
   };
   el.val = function(arg){
   	if(typeof arg == 'string'){
   		el.value = arg;
   	}
   	else{
   		return el.value;
   	}
   }
   return el;
   */


/*function foo(arg){
	console.log(arg)
}*/
//foo('hell web');

var hide = function(arg){
	var ul = document.querySelector(arg);
	ul.style.display = 'none';
};

var val = function(arg1,arg2){
	var ul = document.querySelector(arg1);
	ul.value = arg2;
};

var append = function(){
	var id = arguments[0],
	    arg = arguments[1],
	    reg = /^<\w+>(.*)<\/\1>$/,
	    match = reg.exec(arg),
	    li = document.createElement(match[1]),
	    content = match[2];
	li.innerText = content;
	$(id).appendChild(li);
}

