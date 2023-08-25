import "./Item.css";
import React, {useState} from "react";

function Item(props){

    const itemName = props.name;

    const[name, setName] = useState(props.name);
    

    function clicker(){
        setName("Popcorn");
        console.log("Button Clicked");
      }
      
    return(
        <div>
            <p className="nirma">{itemName}
            {props.children}
            <button onClick={clicker}>Click</button>
            </p>
        </div>
    );
}

export default Item;