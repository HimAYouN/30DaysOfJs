
var myButton = document.getElementById("myButton");
var confermation = document.getElementById("confermation");
var printButton = document.getElementById("printButton");
var userN= '';

myButton.addEventListener("click", function(){
    userN = getValue("uName");
    var pswrd = getValue("password");
    // window.alert(userN);
    confermation.innerHTML = "Your credentials has been submitted";


});

function getValue(id) {
    // window.alert("hii");
    var text = document.getElementById(id).value;
    // document.getElementById(id).value = '';
    // alert(text);
    return text;
}

printButton.addEventListener("click", function(){
    // window.alert(userN);
    document.getElementById("unPrint").innerHTML = userN;
});

