import React from "react";
import "./ProductList.css";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";

const ProductList = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <div>
                <h1 className="ma3">Dresses</h1>
                <div>Filter1</div>
                <div>Filter2</div>
            </div>
        </div>
    )
}

export default ProductList