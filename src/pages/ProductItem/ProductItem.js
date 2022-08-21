import React from "react";
import "./ProductItem.css";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const ProductItem = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductItem