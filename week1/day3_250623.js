// Day 3
//Day 3: Functions, parameters, return values, and function expressions.

//Functions 
//functions are the reusable block of code that perform specific task 
//Decalaring a function 
function greet(){
    console.log("Hello!");
}

// Calling a function 
greet();



//Parameters 
// Functions can accept input known as parameters 
function greet2(name){
    console.log("Hello"+name);

}
let name1 = "Jhon";
greet2(name1);


//Return Value 
//Functions can also return values by using  'return' statement 

function add(a, b) {
    return a+b;
}

console.log(add(2, 7));

//Function Expression 
//Function expressions are another way to define functions. They can be assigned to variables, passed as arguments to other functions, or used as immediately invoked function expressions (IIFE).

var greet3 = function() {
    console.log("Hello");

}

greet3();

