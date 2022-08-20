import React from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Slider = () => {
    return (
        <div>
            <div>
                <ArrowLeftIcon />
            </div>
            <div>WRAPPER</div>
            <div>
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider