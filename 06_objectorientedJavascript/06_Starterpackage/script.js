var person = {
	firstName : "Christina",
	lastName : "Fischer",
	age : function() {
		//year = new Date();
		//year = 2019;
		//myYear = 1986;
		//myAge = ((year.getFullYear()) - this.myYear);
		//myAge = (this.year - this.myYear);
		myAge = 2019-1986;
		alert("My age is " + this.myAge);
	},
	interests : ["reading", "cooking"],
	greeting : function() {
		alert("Hi, my name is " + this.firstName + " " + this.lastName);
		}
}


console.log("Hab's geladen.");

console.log(2019-1986);