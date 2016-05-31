var A = (function() {
	function Person(name) {
		this.name = name;
	}

	var m = function() {
		return "Hello " + this.name;
	};

	Person.prototype.getGreeting = m;

	return Person;
})();

var a = new A("Edgar").getGreeting();
console.log(a);
//console.log(a.getGreeting());