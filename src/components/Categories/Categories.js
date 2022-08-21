import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem"


const Categories = () => {
    return (
        <div>
            {
                categories.map(item => (
                    <CategoriesItem item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Categories