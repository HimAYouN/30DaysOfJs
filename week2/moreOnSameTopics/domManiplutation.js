var data = " ";
//short form for document.getElementById()
function selector(tagName){
    return document.getElementById(tagName);
}




// const header = selector("headTitle");

// header.innerText = " Welcome to TODO Project";

// selector("headParaId").innerHTML = "Type Your Tasks Here";


// //
// var data = (selector("InputID").innerHTML);
// console.log(data);



//Submitting value by clicking Submit button
selector("submitButton").addEventListener("click", ()=>{
    data = valueReturner("InputID");
    // console.log(data);
    // window.alert(data);
    creatingEle(data);

});
//Submitting value bt keyboard "Enter Key"
document.addEventListener("keypress", (event)=>{
    if(event.key=="Enter"){
        data = valueReturner("InputID");
        // console.log(data);
        // window.alert(data);
        creatingEle(data);
    }
    

});


// const keyPress = document.addEventListener('keypress', (event)=>{
//     console.log(event.key);
// });
// console.log(keyPress);


//Fetching value of Users inserted data.
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
