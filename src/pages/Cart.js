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
                <Top></Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "tl"
})``;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Top = styled.div``;

const Bottom = styled.div``;

export default Cart