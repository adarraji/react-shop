import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} alt="product" />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

const Info = styled.div.attrs({
    className: "w-100 h-100 absolute top-0 bottom-0 z-3 flex justify-center items-center pointer"
})`
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
`;

const Container = styled.div.attrs({
    className: "relative flex justify-center items-center ma1"
})`
    flex: 1;
    background-color: #f5fbfd;
    min-width: 280px;
    height: 350px;

    &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div.attrs({
    className: "bg-white absolute"
})`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

const Image = styled.img.attrs({
    className: "h-75 z-2"
})``;




const Icon = styled.div.attrs({
    className: "bg-white ma1 flex justify-center items-center"
})`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.5s ease;

    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


export default Product