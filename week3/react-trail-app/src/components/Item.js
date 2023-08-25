import "./Item.css";

function Item(props){
    function clicker(){
        console.log("Button Clicked");
      }
      
    const itemName = props.name;
    return(
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}
            <button onClick={clicker}>Click</button>
        </div>
    );
}

export default Item;