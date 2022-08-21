import React from "react";
import "./Newsletter.css";
import SendIcon from '@mui/icons-material/Send';


const Newsletter = () => {
    return (
        <div>
            <h1>Newsletter</h1>
            <div>Get timely updates from your favorite products.</div>
            <div>
                <input placeholder="Your email" />
                <button>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter