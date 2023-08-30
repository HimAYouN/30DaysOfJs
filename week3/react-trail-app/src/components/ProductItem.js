import React from "react";

import ProductDate from './ProductDate';
import Card from "./Card";
import './ProductItem.css';


const ProductItem = (props) => {
    return (
        <Card className='Product-item'>
            <div className="product-item_description">
                <h2>{props.title}</h2>
            </div>
            <ProductDate date={props.date}/>
        </Card>
    );
}

export default ProductItem;