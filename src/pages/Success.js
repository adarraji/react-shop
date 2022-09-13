import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    background-color:teal;
    color: white;
    padding: 15px 40px;
    border-radius: 5px;
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Desc = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

const Success = () => {
    const location = useLocation();
    console.log(location);
    return (
        <Container>
            <Wrapper>
                <Title>Successfull</Title>
            </Wrapper>
            <Desc>Your order is being prepared thnks for choosing AD Shop</Desc>
        </Container>
    )
}

export default Success