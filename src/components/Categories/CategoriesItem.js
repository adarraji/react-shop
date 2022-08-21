import React from "react";
import "./CategoriesItem.css";

const CategoriesItem = ({ item }) => {
    return (
        <div className="flex-1 ma1 vh-75 relative">
            <img src={item.img} className="h-100 w-100" />
            <div className="absolute top-0 left-0 w-100 h-100 flex flex-column justify-center items-center">
                <h1>{item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesItem