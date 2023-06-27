//Day 7 
// Day 7: Events, event listeners, handling user interactions, and basic form validation.

//Events
//Events are actions or occurrences that happens in the browser, such as a button being clicked, a form being submitted, or the mouse moving over an element. Javascript allows us to capture and response to these events, enabling us to create interactive web applications.


//Event Listeners
//Event listeners are the functions that are attached to elements and wait for specific event to occur. They allow you to reponse to user interactions by executing code when the event is triggered. The 'addEventListener()' method is used to attach an event listener to an element.

    var button = document.getElementById("myElement").addEventListener("click",function(){
        //Code here 
    })



//Handling User Interactions
//User intractions refer to actions performed by users, such as clicking buttons, submitting forms, or moving the mouse over elements. By attaching event listeners to elements, you can define how your appliccation responds to these interactions.

    var button = document.getElementById("myElement");
    
    button.addEventListener("click", function(){
        console.log("Button clicked");
    });

    var form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();//prevents the form from submitting
        console.log("Form submitted!");
    });


//Basic form Validation
//Form validation is the process of ensuring that user input in a form meets specific criteria.
//Js provides various methods for validating from input, such as checking for required fields, validating email addresses, or ensuring numeric values are entered

    