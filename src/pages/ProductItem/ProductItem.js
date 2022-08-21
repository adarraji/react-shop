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
            <div className="pa4 flex">
                <div className="flex-1">
                    <img className="w-100 vh-90 fit-cover" src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </div>
                <div className="flex-1">
                    <h1>Denim Jumpsuit</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <span>$20</span>
                    <div>
                        <div>
                            <span>Color</span>
                            <div>black</div>
                            <div>darkblue</div>
                            <div>gray</div>
                        </div>
                        <div>
                            <select name="size" id="size" defaultValue={"DEFAULT"}>
                                <option value="DEFAULT" disabled>Size</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductItem