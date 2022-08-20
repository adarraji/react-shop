import React from "react";
import "./Navbar.css";
import Search from "@mui/icons-material/Search";

const Navbar = () => {
    return (
        <div className="bg-light-gray h3 pa1 flex justify-between items-center">
            <div className="flex-1 flex items-center">
                <div className="f5 pointer">
                    {"EN"}
                </div>
                <div>
                    <input />
                    <Search />
                </div>
            </div>
            <div className="flex-1">center</div>
            <div className="flex-1">right</div>
        </div>
    )
}

export default Navbar