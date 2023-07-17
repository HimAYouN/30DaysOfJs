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