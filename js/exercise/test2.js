
var alert = alert || function(log){console.log(log)}

function Foo() {                
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);}; //静态函数
Foo.prototype.getName = function () { alert (3);}; //原型函数
var getName = function () { alert (4);}; //函数表达式
function getName() { alert (5);} //函数声明

Foo.getName();
getName();
//console.log(Foo());
//Foo().getName();
getName();
new Foo.getName();  //this  指向NEW 实例化的对象
new Foo().getName();
new new Foo().getName();

typeof new Foo().getName(); //undefined
typeof new new Foo().getName(); //object