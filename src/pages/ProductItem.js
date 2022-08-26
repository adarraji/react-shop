import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";

const ProductItem = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}


const Container = styled.div``;


const Wrapper = styled.div.attrs({
    className: "flex"
})`
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;


const ImgContainer = styled.div`
    flex: 1;
`;


const Image = styled.img.attrs({
    className: "w-100"
})`
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div.attrs({
    className: "pv0 ph5 tl"
})`
    flex: 1;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1.attrs({
    className: "fw2"
})``;

const Desc = styled.p.attrs({
    className: "mv4 mh0"
})``;

const Price = styled.span.attrs({
    className: "fw1 f2"
})``;


const FilterContainer = styled.div.attrs({
    className: "w-50 mv4 mh0 flex justify-between"
})`
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div.attrs({
    className: "flex items-center"
})``;

const FilterTitle = styled.span.attrs({
    className: "f3 fw2"
})``;

const FilterColor = styled.div.attrs({
    className: "mv0 mh2 pointer"
})`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color}
`;

const FilterSize = styled.select.attrs({
    className: "ml3 pa1"
})``;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div.attrs({
    className: "flex items-center justify-between w-50"
})`
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div.attrs({
    className: "flex items-center fw7"
})``;

const Amount = styled.span.attrs({
    className: "ba flex items-center justify-center mv0 mh2"
})`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    color: teal;
`;

const Button = styled.button.attrs({
    className: "pa2 bg-white pointer fw5"
})`
    border: 2px solid teal;
    
    &:hover {
        background: #f8f4f4;
    }
`;



export default ProductItem