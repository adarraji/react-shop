import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import styled from 'styled-components';

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
`;


const ImgContainer = styled.div`
    flex: 1;
`;


const Image = styled.img.attrs({
    className: "w-100"
})`
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div.attrs({
    className: "pv0 ph5 tl"
})`
    flex: 1;
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
})``;

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



export default ProductItem