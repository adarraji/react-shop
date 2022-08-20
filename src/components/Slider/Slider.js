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
            <div className="h-100 flex">
                {
                    sliderItems.map(item => (
                        <div key={item.id} className="slide flex items-center vh-100">
                            <div>
                                <img src={item.img} />
                            </div>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button>SHOP NOW</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="slider-arrow w2 h2 flex justify-center absolute top-0 bottom-0 pointer o-50 z-2 right-1">
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider