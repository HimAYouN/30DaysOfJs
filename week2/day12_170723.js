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