import React from "react";
import styled from 'styled-components';

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="email" />
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.div``;

const Form = styled.div``;

const Input = styled.div``;

const Agreement = styled.div``;

const Button = styled.div``;


export default Register