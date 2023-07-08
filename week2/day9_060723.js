//Day 09: Promises, handling asynchronous operations, and chaining promises.

//Promises
    //Promises are a build-in javascript featureintruduced to handle asynchronous operation in a more structured and intuitive way.
    //A promise represents the eventual completion (or failure) of an asynchronous task and allows us to attach callbacks to handle the results.
    //To create a promise, we can use the'Promise' constructor, which takes a function as an argument. This function, called the executor, contains the asynchronous operation you want to perform. 

    //Example
    var myPromise = new Promise(function(resolve, reject){
        //Asynchronous operation
        setTimeout(function(){
            var data = "Good day!";
        }, 2000);
    });

    //In this example, we create a Promise that simulates an asynchronous operation using 'setTimeout'. After a delay of 2 seconds, the Promise is resolved with the message "Good day!" using the 'resolve()' function.

//Handling Asynchronous Opeartions with Promises:
    //Promises provide methods to handle the fulfillment or rejection of the asynchronous task. 
    //The most common methods are:
        //'then()' : Attaches a callback function to handle the fulfillment of the Promise.
        //'catch()' : Attaches a callback function to handle the rejection of the promise.

    //Example
    myPromise.then(function(result){
        console.log(result); // Output: Good day
    }).catch(function(error){
        console.log(error);
    });

    //In the example, we use 'then()' method to handle the fulfillment of the promise. The callback function receives the resolved value of the promise (in this example "Good day"), If the promise is rejected, the 'catch()' method is used to handle the error.

//Chaining Promises

    //Promises can be chained together to handle a sequence a asynchronous operations. The result of one Promise becomes the input for the next, allowing us to create a clean and readable flow of asynchronous task.
    //Example 

     var firstPromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            var data = "first Promise";
            resolve(data);
        }, 2000);
     });

     var secondPromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            var result = " second promise";
            resolve(result);
        }, 3000);
     });

     firstPromise.then(function(result){
        console.log(result);
        return secondPromise;

     }).then(function(result){
        console.log(result);
     }).catch(function(error){
        console.log(error);
     });

     //In this example, we have two Promises (firstPromise and secondPromise). The 'then()' method is used to chain them together. The result of the first Promise is passed as input to the second Promise, creating a sequential flow of asynchronous operations.