import React from "react";
import "./Product.css";

const Product = ({ item }) => {
    return (
        <div className="product relative">
            <div className="w-50 h-50 bg-white absolute"></div>
            <img src={item.img} />
            <div></div>
        </div>
    )
}

export default Product