import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="flex">
            <div className="flex-1 pa3">
                <h1>Ecommerce Store</h1>
                <div>{"There are many variations of passages of Lorem Ipsum available, but The majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."}</div>
                <div></div>
            </div>
            <div className="flex-1 pa3">CENTER</div>
            <div className="flex-1 pa3">RIGHT</div>
        </div>
    )
}

export default Footer