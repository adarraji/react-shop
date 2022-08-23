import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { style } from "@mui/system";

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
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
    className: "flex items-center justify-between"
})``;

const TopButton = styled.button.attrs({
    className: "pa2 fw6 pointer"
})``;

const Bottom = styled.div``;

export default Cart