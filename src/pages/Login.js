import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username: username, password: password })
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
                    <Input type="passowrd" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>LOG IN</Button>
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
    ${mobile({ width: "75%" })}
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
    className: "w-40 pv2 ph3 white pointer f6 mv2"
})`
    border: none;
    background-color: teal;    
`;

const Link = styled.a.attrs({
    className: "mv2 mh0 f7 underline pointer"
})``;


export default Login