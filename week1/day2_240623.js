//Day 2

// Control flow statement
 // if-else

 if(4>5){
    console.log("4 is greater than 5");

 }else{
    console.log("4 is not greater than 5");
 }

  // Switch statement 
  //Switch statement is used to perform actions based on different conditions 
  
  var day = "Monday";
  switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    
    default:
        console.log("Another day");

  }

  //Loops 
    //For loop
    for(let i = 0; i<5;i++){
        console.log(i);
    }

    //While loop
    let j = 0;
    while (j<5){
        console.log(j);
        j++;
    }


    //Error Handling 
    //Try-catch block
    //The 'try' block contains the code that might through an error
    //The catch block is executed when an error occurs in corresponding 'try' block

    try {
        // Code that might throw an error
        var result = 10 / 0;
        console.log(result);
      } catch (error) {
        // Code to handle the error
        console.log("An error occurred:", error);
      }
      
      
    //Throwing custom errors
    function divide(a, b) {
        if (b === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return a / b;
      }
      
      try {
        var result = divide(10, 0);
        console.log(result);
      } catch (error) {
        console.log("An error occurred:", error);
      }
      