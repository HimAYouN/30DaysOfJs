// Day 08: Introduction to asynchronous JavaScript, callbacks, and setTimeout.

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


