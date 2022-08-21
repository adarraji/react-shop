import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return (
        <div className="flex">
            <div className="flex-1 pa3 flex flex-column tl">
                <h1 className="pl2">Ecommerce Store</h1>
                <div className="ma0 mt2 mb2 pl2">{"There are many variations of passages of Lorem Ipsum available, but The majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."}</div>
                <div className="flex">
                    <div className="circle-40 white ma2 flex justify-center items-center bg-facebook">
                        <FacebookIcon />
                    </div>
                    <div className="circle-40 white ma2 flex justify-center items-center bg-instagram">
                        <InstagramIcon />
                    </div>
                    <div className="circle-40 white ma2 flex justify-center items-center bg-twitter">
                        <TwitterIcon />
                    </div>
                    <div className="circle-40 white ma2 flex justify-center items-center bg-pintrest">
                        <PinterestIcon />
                    </div>
                </div>
            </div>
            <div className="flex-1 pa3 tl">
                <h3 className="mb3">Useful Links</h3>
                <ul className="ma0 pa0 list flex flex-wrap">
                    <li className="mb1 w-50">Home</li>
                    <li className="mb1 w-50">Cart</li>
                    <li className="mb1 w-50">Man Fashion</li>
                    <li className="mb1 w-50">Woman Fashion</li>
                    <li className="mb1 w-50">Accessories</li>
                    <li className="mb1 w-50">My Account</li>
                    <li className="mb1 w-50">Order Tracking</li>
                    <li className="mb1 w-50">Wishlist</li>
                    <li className="mb1 w-50">Wishlist</li>
                    <li className="mb1 w-50">Terms</li>
                </ul>
            </div>
            <div className="flex-1 pa3 tl">
                <h3>Contact</h3>
                <div className="mb3 flex items-center">
                    <RoomIcon className="mr1" />
                    622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="mb3 flex items-center">
                    <LocalPhoneIcon className="mr1" />
                    +1 234 56 78
                </div>
                <div className="mb3 flex items-center">
                    <MailOutlineIcon className="mr1" />
                    contact@ad.dev
                </div>
                <div className="w-50">
                    <img src={"https://i.ibb.co/Qfvn4z6/payment.png"} />
                </div>
            </div>
        </div>
    )
}

export default Footer