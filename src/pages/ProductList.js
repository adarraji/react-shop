import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const ProductList = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <h1 className="ma3">Dresses</h1>
            <div className="flex justify-between">
                <div className="ma3">
                    <span className="f5 fw6 mr3">Filter Products:</span>
                    <select className="pa2 mr3" name="color" id="color" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select className="pa2 mr3" name="size" id="size" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className="ma3">
                    <span className="f5 fw6 mr3">Sort Products:</span>
                    <select className="pa2 mr3" name="sort" id="sort" defaultValue={"newest"}>
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