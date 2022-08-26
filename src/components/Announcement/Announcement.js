import React from "react";
import styled from "styled-components";

const Announcement = () => {
    return (
        <Container className="h2 f5 fw5 white flex justify-center items-center announce-container">
            {"Super Deal! Free Shipping on Orders Over 50%"}
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "f4 fw5 white flex justify-center items-center announce-container"
})`
    background-color: teal;
    height: 30px;
`;


export default Announcement