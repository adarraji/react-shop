import React from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Slider = () => {
    return (
        <div className="w-100 vh-100 flex relative">
            <div className="slider-arrow w2 h2 flex justify-center absolute top-0 bottom-0 pointer o-50 z-2 left-1">
                <ArrowLeftIcon />
            </div>
            <div>WRAPPER</div>
            <div className="slider-arrow w2 h2 flex justify-center absolute top-0 bottom-0 pointer o-50 z-2 right-1">
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider