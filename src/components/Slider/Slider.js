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
            <div className="h-100 flex justify-center">
                {
                    sliderItems.map(item => (
                        <div key={item.id} className="slide flex justify-center items-center vh-100">
                            <div className="flex-1 h-100 pl5 flex justify-end items-center">
                                <img src={item.img} />
                            </div>
                            <div className="flex-1 pa6">
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