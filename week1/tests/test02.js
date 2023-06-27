
var myButton = document.getElementById("myButton");
var confermation = document.getElementById("confermation");
myButton.addEventListener("click", function(){
    var userN = getValue("uName");
    var pswrd = getValue("password");

    // window.alert(userN);
    // window.alert(pswrd);
    confermation.innerHTML = "Your credentials has been submitted <button>Click Here</button> to see your Username.";

});

function getValue(id) {
    var text = document.getElementById(id).value;
    // alert(text);
    return text;
}