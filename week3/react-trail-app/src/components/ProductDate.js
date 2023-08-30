import React from "react";
// import  '../App.js'
//  import './ProductDate.css';
// import ProductItem from "./ProductItem";


 const ProductDate = (props)=>{

    return (
        <div className="product-date">
            <div className="product-date_month">{props.date.itemMonth}</div>
            <div className="product-date_year">{props.date.itemYear}</div>
            <div className="product-date_day">{props.date.itemDay}</div>
        </div>
    )
 }

 export default ProductDate;