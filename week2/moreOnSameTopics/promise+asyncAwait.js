//Dealing with Asynchronous operations with promises and async await


function getCheese(){
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
         const cheese = "Cheese";
         console.log("I got the cheese");
        resolve(cheese);
         
       }, 2000);
    });
   
}

function makeDough(){
 return new Promise((resolve, reject)=>{
   setTimeout(() => {
       const dough = "DOugh";
       console.log("Got the dough");
       resolve(dough);
   }, 2000);
 });
}

function bakePizza(){ 
 return new Promise((esolve, reject)=>{
   setTimeout(() => {
       const pizza = "Pizza";
       console.log("Done! Your Pizza is ready");
       resolve(pizza);
   }, 2000);
   
 });
}

getCheese().then((cheese)=>{
   console.log(cheese);
 makeDough();
}).then((dough)=>{
 console.log(dough);
 bakePizza();
}).then((pizza)=>{
 console.log(pizza);
 
}).catch((error)=>{
 console.log(error);
})

