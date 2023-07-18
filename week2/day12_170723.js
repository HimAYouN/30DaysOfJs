//Day 12: Higher-order functions, closures, and scope.

//Higher-order Functions
// functions that can take other functions as arguments or return functions as their results. This concept allows for powerful programming techniques like function composition and abstraction.

//Example:

function higherOrderFunction(callback){

    callback();
}

higherOrderFunction(()=>{
    console.log("Hello");
});


//closures:
//Closures are a combination of a function and the lexical environment within which it was declared.
//They allow functions to retain access to variables from their outer scope, even after the outer function has finished executing.

//Example:
    function outer(){
        var outerVar = "This is outer var";

        function inner(){
            console.log(outerVar);
        }

        return inner;
    }

    var closure = outer();
    closure();


    //In the example,  the inner function forms a closure with its outer scope, allowing it to access the outerVariable even after the outer function has finished executing
    //The outer function returns the inner function, which is assigned to the closure variable. When closure is called, it logs the value of outerVariable to the console.

    // Scope:
        // Scope refers to the accessibility and visibility of variables, functions, and objects within a particular part of your code during runtime. It determines the lifetime and availability of variables and helps prevent naming conflicts.
        //In JavaScript, variables declared with the var keyword have function scope, while variables declared with the let and const keywords have block scope.