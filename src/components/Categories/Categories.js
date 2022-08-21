import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem"


const Categories = () => {
    return (
        <div className="pa4 flex justify-between">
            {
                categories.map(item => (
                    <CategoriesItem item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Categories