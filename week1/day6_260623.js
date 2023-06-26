//Day 6
//DOM Manipulation Basics
//The Document Object Model (DOM) is a programming interface that represents the structure of HTML documents. It allows Javascript to interact with the elements of a web page.


//Selecting Elements
//There are various methods available to select elements in the DOM
    //'getElementById()' Selects element by its unique ID.
    //'getElementByClassName()' Selects element by their class name.
    //'getElementByTagName()' Selectselement by their tag name.
    //'querySelector()' Selects the first element that matches a CSS selector
    //querySelectorAll()' Selects all elements that match a CSS selector

    var elementById = document.getElementById("myElement");
    var elementByClass = document.getElementsByClassName("myClass");
    var elementByTag = document.getElementsByTagName("div");
    var elementBySelector = document.querySelector(".myClass");
    var elementBySelectorAll = document.querySelectorAll("div.myClass");

//Changing HTML Content 
