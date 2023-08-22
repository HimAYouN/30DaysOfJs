var username = [];
  var add = "";
  var email = "";
  var phone = "";
    const obj = [];


const url = "https://jsonplaceholder.typicode.com/users";
const users =  async()=>{
  const res = await fetch(url);
  const data = await res.json();
  
  data.forEach((obj)=>{
    username.push(" <br>" + obj.name);
    add = add+" <br>"+ JSON.stringify(obj.address.city);
    email = email +"<br>"+ obj.email;
    phone = phone +"<br>"+ obj.phone;
  });
//   document.getElementById('name').innerHTML = username   ;
//   document.getElementById('address').innerHTML = add;
//   document.getElementById('email').innerHTML = email;
//   document.getElementById('phone').innerHTML = phone;
  
// console.log(username)
displayObject(username(0), "usID1");


}
users();


function displayObject(element, divId) {
    const div = document.getElementById(divId);
    div.innerHTML = `
      <h1>${element}</h2>
      
    `;
    console.log(element)
  }
