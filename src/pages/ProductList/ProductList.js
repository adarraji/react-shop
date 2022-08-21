import React from "react";
import "./ProductList.css";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const ProductList = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <h1 className="ma3">Dresses</h1>
            <div className="flex justify-between">
                <div className="ma3">
                    <span className="f5 fw6">Filter Products:</span>
                    <select name="color" id="color" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div className="ma3">
                    <span className="f5 fw6">Sort Products:</span>
                    <select name="sort" id="sort" defaultValue={"newest"}>
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price (asc)</option>
                        <option value="prrice-desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList