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