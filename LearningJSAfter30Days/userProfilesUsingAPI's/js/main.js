
const url = "https://jsonplaceholder.typicode.com/users";
const users =  async()=>{
  const res = await fetch(url);
  const data = await res.json();
  var name = "";
  var add = "";
  data.forEach((obj)=>{
    name = name + " <br>" + obj.name;
    add = add+" <br>"+ JSON.stringify(obj.address);
    
  });
  document.getElementById('name').innerHTML = name + add;
//   document.getElementById('name').innerHTML = add;
  
}
users();
