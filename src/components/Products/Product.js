import React from "react";
import "./Product.css";

const Product = ({ item }) => {
    return (
        <div className="product relative flex justify-center items-center ma1">
            <div className="circle bg-white absolute"></div>
            <img src={item.img} />
            <div></div>
        </div>
    )
}

export default Product