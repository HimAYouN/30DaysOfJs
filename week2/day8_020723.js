// Day 08: Introduction to asynchronous JavaScript, callbacks, and setTimeout.


//Part 1 Introduction to asynchronous JavaScript
//Asynchronous JavaScript:
    // Javascript is single threaded language, meaning it executes one line at a time  in a sequential manner.
    //However the are scenarios where we need to perform time consuming task or handle operations that may take a while to complete such as making network request or reading/writing files.
    //Asynchronous javascript allows us to handle these tasks without blocking the execution of other operations.


//How Asynchronous Operations Work:
    //In the browser , javascript runs an event-driven environment where it can listen for and respond to an event like user interaction, network responses and timers.
    //Asynchronous operations are initiated, and the js engine continues executing other tasks while waiting for those operations to complete. Once an operation is finished, a callback function or a promise is used to handle the result or trigger further actions.

//The Event Loop and Execution Stack:
    //The event loop is a mechanism that handles the execution of asynchronous operations in javascript, it continuously checks for completed operations and pushes their corressponding callback functions onto the execution stack, alowing them to be executed when javascript engine is available.

//Understanding the concept of Asynchronous javascript, the event loop and the execution stack is essential for building responsive and efficient applications. It enables us to perform task i background without blocking the User interface or freezing the application.

//Part 2 callbacks
// Callback Functions
    //callback functions are functions that are passed as arguments to other functions and are executed later or after a certian events  occurs. 
    //callbacks are fundamental concept in Asynchronous programming and allow us to handle the result of Asynchronous operation or perform actions after a specific event.

//Handling Asynchronous Operations with Callbacks:
    //Callback functions are commonly used to handle aynchronous operations such as making API requests, reading files, or performing database queries, it calls the provided callback function, passing the result or error as arguments.

    function fetchData(callback) {
        //Simulating an asynchronous operation
        setTimeout(function () {
            const data = {name: "jhon", age: 25};
            callback(data)
            
        }, 2000);
        
    }

    //calling the fetchData function with callback
    fetchData(function(result){
        console.log(result);

    });

    //In the example the 'fetchData' function simulates an asynchronous opeartion using 'setTimeOut'.After a delay of 2000miliseconds (2seconds), it calls the provided callback function with the fetched data. The callback function then logs the result  to the console.

    //callback functions allow us to work with the results of asynchronous operations and perform further actions, such as updating the UI or triggering additional functions.