import React from "react";
import "./Product.css";
import { popularProducts } from "../../data";
import Product from "./Product";

const Products = () => {
    return (
        <div className="pa4 flex justify-between flex-wrap">
            {
                popularProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Products