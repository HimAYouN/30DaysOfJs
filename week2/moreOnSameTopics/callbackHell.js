//Here i will try to command to make a pizza with help of callback and setTimeout




// callback and settimeouts

function getCheese(callback) {
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("i got the cheese:"+ cheese);
        callback(cheese);
    }, 2000);
}
function makeDough(cheese, callback) {
    setTimeout(()=>{
        const dough = "☁️"+ cheese;
        console.log("i got the dough:"+ dough);
        callback(dough);
    }, 2000);
}
function makePizza(dough, callback) {
    setTimeout(()=>{
        const pizza = "🍕" + dough;
        console.log("i got the pizza:"+ pizza);
        callback(pizza);
    }, 2000);
}










// calling Functions

getCheese((cheese)=>{
   makeDough(cheese, (dough)=>{
     makePizza(dough, (pizza)=>{
       console.log("Pizza is ready" + pizza);
       
     });
   });
});

