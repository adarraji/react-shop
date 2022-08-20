import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="bg-light-gray h3 pa1 flex justify-between items-center">
            <div className="flex-1">
                <div className="f5 pointer">
                    {"EN"}
                </div>
                <div>
                    <input />
                </div>
            </div>
            <div className="flex-1">center</div>
            <div className="flex-1">right</div>
        </div>
    )
}

export default Navbar