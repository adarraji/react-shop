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

const Container = styled.div.attrs({
    className: "w-100 vh-100 flex items-center justify-center"
})`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
`;

const Wrapper = styled.div.attrs({
    className: "pa3 w-40 bg-white tl"
})`
`;

const Title = styled.h1.attrs({
    className: "f3 fw3"
})`
`;

const Form = styled.form.attrs({
    className: "flex flex-wrap"
})`
`;

const Input = styled.input.attrs({
    className: "mv2 mh1 pa2 f6"
})`
    flex: 1;
    min-width: 40%;
`;

const Agreement = styled.span.attrs({
    className: "f7 mv3 mh0"
})`  
`;

const Button = styled.button.attrs({
    className: "w-40 pv2 ph3 white pointer f6"
})`
    border: none;
    background-color: teal;    
`;


export default Register