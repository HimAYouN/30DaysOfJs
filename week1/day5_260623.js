// Day 5 
//Day 5: Introduction to objects, object properties, methods, and accessing/modifying object data.
//Objects


// In javascript, objects are used to represent complex data structures
//They consist of key-value pairs, where the keys are strings (or symbols) and the values can be any valid JavaScript data type.

var car = {
    color : "Red",
    type : "4 wheeler",
    topSpeed: "160",

};

//Object Properties

//Object properties are accessed using dot notation (object.property) or bracket notation (object["property"])

console.log(car.color);
console.log(car["topSpeed"]);

//Object Methods 
//Object methods are functions that are stored as object properties, they can be defined within an object and invoked using dot notation

var person = {
    name: "Himayoun",
    age: 19,
    sayHello: function(){
        console.log("Hello my name is" + this.name+ "!");

    }
};

person.sayHello();


//Accessing and Modifying Object Data
 console.log(person.age);
 person.age= 20;
 console.log(person.age);

