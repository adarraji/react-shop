import React from "react";
import "./Navbar.css";
import Search from "@mui/icons-material/Search";

const Navbar = () => {
    return (
        <div className="h3 pv2 ph3 flex justify-between items-center">
            <div className="flex-1 flex items-center">
                <div className="f5 pointer">
                    {"EN"}
                </div>
                <div className="ba b--light-silver flex items-center ml3 pa">
                    <input className="border-none" />
                    <Search className="gray" style={{ fontSize: 16 }} />
                </div>
            </div>
            <div className="flex-1">center</div>
            <div className="flex-1">right</div>
        </div>
    )
}

export default Navbar