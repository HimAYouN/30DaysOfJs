//Day 3

//Arrays 
//Array are used to store multiple values in single variable 

var numbers = [1, 2, 3, 4];
var fruits = ["oranges", "apples"];
var mixed = [1, "pineapple", true];

//Array manipulation 
//Array in js will come with build-in methods to manipalte their content
    //Adding Elements 
        //push() : adds elements to end of array
        //unshift() : add elements to start of array 
    //Removing Elements 
        //pop() : removes the last element and returns it 
        //shift() : removes the first element and  returns it 
    //Modifying Elements 
        //splice() : Adds or removes element from array at specific index
        var arrFruits = ["apples"];
        arrFruits.push("Oranges");
        arrFruits.unshift("Mango");
    
        arrFruits.shift(); arrFruits.unshift("Gava"); console.log(arrFruits); arrFruits.push("Peach", "Grapes"); console.log(arrFruits);