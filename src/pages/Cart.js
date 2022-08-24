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
                    <Info>Info</Info>
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

export default Cart