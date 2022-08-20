import React from "react";
import "./Navbar.css";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
            <div className="flex-1">
                <h1 className="tc">Ecommerce Store</h1>
            </div>
            <div className="flex-1 flex justify-end items-center">
                <div className="f5 ml3 pointer">{"REGISTER"}</div>
                <div className="f5 ml3 pointer">{"SIGNIN"}</div>
                <div className="f5 ml3 pointer">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </div>

            </div>
        </div>
    )
}

export default Navbar