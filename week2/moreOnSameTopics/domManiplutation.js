var data = " ";
//short form 
function selector(tagName){
    return document.getElementById(tagName);
}




// const header = selector("headTitle");

// header.innerText = " Welcome to TODO Project";

// selector("headParaId").innerHTML = "Type Your Tasks Here";


// //
// var data = (selector("InputID").innerHTML);
// console.log(data);

selector("submitButton").addEventListener("click", ()=>{
    data = valueReturner("InputID");
    // console.log(data);
    // window.alert(data);
    creatingEle(data);

})


function valueReturner(id){
    data = selector(id).value;
    selector(id).value = "";
    return data;
}






//Creating Elements
function creatingEle(data){
    const task = document.createElement("li");
    const element = selector("ulID");
     task.innerText = data;// setting inner HTML of li element to user data
     task.classList.add("item");
    element.appendChild(task);
}
