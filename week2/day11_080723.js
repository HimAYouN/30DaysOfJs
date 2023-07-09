// - Day 11: Advanced array methods (map, filter, reduce) and working with multidimensional arrays.
//Array Methods (Map, Filter, Reduce)


//Map Method
    //The 'map()' method is used to create a new array by applying a function to each element of an existing array. It returns a new array with the results of the function applied to each element.
    //example

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var doubledNumber = numbers.map((i)=> {
        return i*2
    });
    console.log(doubledNumber);

//Filter Method
    //The 'filter()' Method is used to create a new array containing only the elements that satisfy a specified condition. It tests each element in the array with a provided function and returns a new array with the elements which pass the test.
    //Example
    var evenNumbers = numbers.filter((j)=>{
        return j*2 >= 10;
    });
    console.log(evenNumbers);


//Reduce Method
    //The 'reduce()' method is used to reduce an array to a single value by executing a provided function an each element.
    // It accumulates the result of the function from left to right and returns the final accumulates value.
    //Example
    var sum = numbers.reduce((acc, num)=>{
        return acc+num;
    }, 0);
     console.log(sum);

//Find()
    const a = [1,2,-3,4,-4,5,3,6,-7,-2,-5,-6,9,-9];

    console.log(a);

    function firstNeg(num){
        return num<0;
    }
        
    var result = a.find(firstNeg);
    
    console.log(result);

//FindIndex()

    // function firstNegIndex(num){
    //     return num<0;
    // }
    // var result2 = a.findIndex(firstNegIndex);
    var result2 = a.findIndex(firstNeg);

    console.log(result2);


//forEach()
    var sum = 0;

    a.forEach((i)=>{
        sum = sum+i;
    });
    console.log(sum);

    
    var ans = 1;
    
    a.forEach((i)=>{
        ans = ans*i;
    });

    console.log(ans*-1);
    

//Working with the Multidimensional Arrays
     //Muti-Dimensional Arrays are arrays that contain other arrays as their element. They are often used to represent tabular or grid-like data structure.
     //We ca access and manipulate elements in the Multidimensional array using multiple indices.
    
    //Example
    var mDArray =[[1,2],[2,3,4,5,6],[6,7,8],[8,9,0]];
    console.log(mDArray[1][1]);