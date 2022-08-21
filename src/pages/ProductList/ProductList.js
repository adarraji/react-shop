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
                <div className="ma3">Filter1</div>
                <div className="ma3">Filter2</div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList