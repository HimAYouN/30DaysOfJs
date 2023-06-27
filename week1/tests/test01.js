document.getElementById("myButton").addEventListener("click", function(){
    window.alert("Hello World!");
    console.log("Pass");
})
var changeHtml = document.getElementById("changeHtml");
var generateText = document.getElementById("generateText");
generateText.addEventListener("click", function(){
    console.log("Pass");
    changeHtml.innerHTML = "This Text is generated when you clicked the above button";
})





// document.getElementsByClassName("generateText").addEventListener("click", function(){
//     window.alert(224);
//     console.log("pass");
// });