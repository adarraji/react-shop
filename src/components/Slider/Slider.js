import React from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Slider = () => {
    return (
        <div className="w-100 vh-100 flex">
            <div className="slider-arrow w2 h2">
                <ArrowLeftIcon />
            </div>
            <div>WRAPPER</div>
            <div className="slider-arrow w2 h2">
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider