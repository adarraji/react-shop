import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";
import styled from "styled-components";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const onArrowClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else if (direction === "right") {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => onArrowClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt="slide" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => onArrowClick("left")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}


const Container = styled.div.attrs({
    className: "w-100 vh-100 flex relative overflow-hidden"
})``;

const Arrow = styled.div.attrs({
    className: "flex justify-center items-center absolute top-0 bottom-0 pointer o-50 z-2"
})`
    background-color: #fff7f7;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto; 
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`;


const Wrapper = styled.div.attrs({
    className: "h-100 flex justify-center"
})`
    transform: translateX(0vw);
    transition: all 1.5s ease;  
    transform: translateX(${(props) => props.slideIndex * -100}vw);  
`;

const Slide = styled.div.attrs({
    className: "flex justify-center items-center vh-100"
})`
    width: 100vw;
`;


const ImgContainer = styled.div.attrs({
    className: "h-100 flex justify-end"
})`
    flex: 1;
`;

const Image = styled.img.attrs({
    className: ""
})`
    height: 80%;
`;

const InfoContainer = styled.div.attrs({
    className: "pa6 tl"
})`
    flex: 1;
`;

const Title = styled.h1.attrs({
    className: "f1"
})``;


const Desc = styled.p.attrs({
    className: "ma0 mv5 f3 fw5 tracked"
})`
    
`;

const Button = styled.button.attrs({
    className: "pa2 f5 pointer bg-transparent"
})`
    
`;

export default Slider