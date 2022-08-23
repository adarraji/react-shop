import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            CART
            <Footer />
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "tl"
})``;

export default Cart