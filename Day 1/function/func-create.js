function Person(name,age){
    this.name = name;
    this.age = age;
 
}
Person.prototype.sayName = function() {
    console.log(`I'm ${this.name}`);
}

Person.prototype.sayAge = function() {
    console.log(this.age);
}
var v1 = new Person("Kiran",22);
v1.sayName();
v1.sayAge();
console.log(v1);
v1.age = 15;
console.log(v1);

console.log("\n\n");

// ---------------------------------- //

var v2 = new Person();
v2.name = "KK";
v2.status = "Sing";

console.log(v1)
console.log(v2);

var x1 = {
    1 : "Kiran"
    2 : "Hi"
};
console.log(x1)