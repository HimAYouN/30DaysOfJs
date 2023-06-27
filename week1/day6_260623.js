//Day 6
//Day 6: DOM manipulation basics, selecting elements, changing HTML content, and manipulating CSS classes.
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
//HTML content can be modified using folling properties
    //'textContent' Changes the text content of an element
    //'innerHTML' Changes the HTML content of an element

    var element = document.getElementById("myElement");
    element.textContent = "New text Content";
    element.innerHTML = "<strong>New HTML content</strong>";


//Manipulating CSS Classes 
 //CSS classes can be added, removed, or toggled on elements using 'classList' property
    //'classList.add()' Adds a class to an element
    //'classList.remove()' Removes a class from an element
    //'classList.toggle()' Toggles the presence of a class on an element

    var element = document.getElementById("myElement");
    element.classList.add("newClass");
    element.classList.remove("oldClass");
    element.classList.toggle("active");

    