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
    
        arrFruits.shift(); arrFruits.unshift("Gava");  arrFruits.push("Peach", "Grapes"); console.log(arrFruits);

    //Array iteration 
    //Iteration over array allows us to perform task on each element 
        //'for' loop:  allows us to loop over array using indec variable 
        //'forEach()' : Executes a provided function once for each array element 
        //'map()' : creates a new arary with the results of calling a provided function on every element 
        //'filter()' : creates a new array with elements that pass a provided test

        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for(var i  = 0; i<10;i++){
            console.log(numbers[i]+ ", ");
        }


        numbers.forEach(function(i){
            console.log(i);
        });

        numbers.forEach(j=>{
            console.log(j);
        });

        var evenNbrs = numbers.filter(function(i){
            return i % 2 == 0;
        })

        evenNbrs.forEach(i => {
            console.log(i);
        });