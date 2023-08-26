import React from "react";
//  import './ProductDate.css';


 const ProductDate = (props)=>{
    const month = props.itemDate.Month; 
    const year = props.itemDate.Year; 
    const day = props.itemDate.Day;

    return (
        <div className="product-date">
            <div className="product-date_month">{month}</div>
            <div className="product-date_year">{year}</div>
            <div className="product-date_day">{day}</div>
        </div>
    )
 }

 export default ProductDate;