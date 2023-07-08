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