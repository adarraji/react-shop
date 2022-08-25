import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";


const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} alt="category" />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "ma1 vh-75 relative"
})`
    flex: 1;
`;

const Image = styled.img.attrs({
    className: "h-100 w-100"
})`
     object-fit: cover;
     ${mobile({ height: "20vh" })}   
`;

const Info = styled.div.attrs({
    className: "absolute top-0 left-0 w-100 h-100 flex flex-column justify-center items-center"
})``;

const Title = styled.h1.attrs({
    className: "white mb3"
})``;

const Button = styled.button.attrs({
    className: "pa2 fw6 bg-white gray"
})`
    border:none;
`;

export default CategoriesItem