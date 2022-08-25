import React from "react";
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { mobile } from "../../responsive";


const Container = styled.div.attrs({
    className: "flex justify-center items-center flex-column"
})`
    height: 60vh;
    background-color: #fcf5f5;
`;

const Title = styled.h1.attrs({
    className: "f1 mb3"
})``;

const Desc = styled.div.attrs({
    className: "f3 fw5 mb3"
})`
    ${mobile({ textAlign: "center", fontSize: "20px" })}   

`;

const InputContainer = styled.p.attrs({
    className: "bg-white flex justify-between ba b--light-silver"
})`
    width: 50%;
    height: 40px;
    ${mobile({ width: "80%" })}   

`;

const Input = styled.p.attrs({
    className: "pa2"
})`
    border: none;
    flex: 8;
`;

const Button = styled.button.attrs({
    className: "white flex justify-center items-center"
})`
    flex: 1;
    background-color: teal; 
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter