import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className="flex">
            <div className="flex-1 pa3 flex flex-column tl">
                <h1 className="pl3">Ecommerce Store</h1>
                <div className="ma0 mt2 mb2 pl3">{"There are many variations of passages of Lorem Ipsum available, but The majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."}</div>
                <div>
                    <div>
                        <FacebookIcon />
                    </div>
                    <div>
                        <InstagramIcon />
                    </div>
                    <div>
                        <TwitterIcon />
                    </div>
                    <div>
                        <PinterestIcon />
                    </div>
                </div>
            </div>
            <div className="flex-1 pa3">CENTER</div>
            <div className="flex-1 pa3">RIGHT</div>
        </div>
    )
}

export default Footer