import React from "react";
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOG IN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "w-100 vh-100 flex items-center justify-center"
})`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
`;

const Wrapper = styled.div.attrs({
    className: "pa3 w-30 bg-white tl"
})`
`;

const Title = styled.h1.attrs({
    className: "f3 fw3"
})`
`;

const Form = styled.form.attrs({
    className: "flex flex-column"
})`
`;

const Input = styled.input.attrs({
    className: "mv2 mh0 pa2 f6"
})`
    flex: 1;
    min-width: 40%;
`;

const Button = styled.button.attrs({
    className: "w-40 pv2 ph3 white pointer f6"
})`
    border: none;
    background-color: teal;    
`;

const Link = styled.a``;


export default Login