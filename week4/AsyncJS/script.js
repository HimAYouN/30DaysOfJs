
console.log("Hi");


function y () {
    console.log("Window");
    setTimeout(function x(){
        console.log("Hello");
    }, 2000);

}

setTimeout(y, 1000);