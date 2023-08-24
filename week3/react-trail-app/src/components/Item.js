import "./Item.css";

function Item(props){
    const itemName = props.name;
    return(
        <p className="nirma">{itemName}</p>
    );
}

export default Item;