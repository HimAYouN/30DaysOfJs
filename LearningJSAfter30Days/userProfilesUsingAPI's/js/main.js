var username = "";
  var add = "";
  var email = "";
  var phone = "";



const url = "https://jsonplaceholder.typicode.com/users";
const users =  async()=>{
  const res = await fetch(url);
  const data = await res.json();
  
  data.forEach((obj)=>{
    username = username + " <br>" + obj.name;
    add = add+" <br>"+ JSON.stringify(obj.address.city);
    email = email +"<br>"+ obj.email;
    phone = phone +"<br>"+ obj.phone;
    
  });
  document.getElementById('name').innerHTML = obj.name ;
  document.getElementById('address').innerHTML = add;
  document.getElementById('email').innerHTML = email;
  document.getElementById('phone').innerHTML = phone;
  
}
users();
