import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(4)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></Image>
                                <Details>
                                    <ProductName>
                                        JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div``;

const Wrapper = styled.div.attrs({
    className: "pa3"
})``;

const Title = styled.h1.attrs({
    className: "fw3 tc"
})``;

const Top = styled.div.attrs({
    className: "flex items-center justify-between pa3"
})``;

const TopButton = styled.button.attrs({
    className: "pa2 fw6 pointer"
})`
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span.attrs({
    className: "underline pointer mv0 mh2"
})``;


const Bottom = styled.div.attrs({
    className: "flex justify-between tl"
})``;

const Info = styled.div`
    flex:3;
`;

const Summary = styled.div`
    flex:1;
`;


const Product = styled.div``;

const ProductDetail = styled.div``;

const Image = styled.img``;

const Details = styled.div``;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div``;

const ProductSize = styled.span``;

const PriceDetail = styled.div``;

const ProductAmountContainer = styled.div``;

const Add = styled.div``;

const ProductAmount = styled.div``;

const Remove = styled.div``;



export default Cart