import React from "react";
import "./CategoriesItem.css";

const CategoriesItem = ({ item }) => {
    return (
        <div>
            <img src={item.img} />
            <div>
                <h1>{item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesItem