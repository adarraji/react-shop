import React from "react";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{ fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Ecommerce Store</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                        <Badge>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
`;

const Wrapper = styled.div.attrs({
    className: "flex justify-between items-center pv1 ph3"
})``;


const Left = styled.div.attrs({
    className: "flex items-center"
})`
    flex: 1;
`;


const Language = styled.span.attrs({
    className: "f5 pointer"
})``;

const SearchContainer = styled.div.attrs({
    className: "ba b--light-gray flex items-center ml3 pa"
})``;

const Input = styled.input.attrs({
    className: ""
})`
    border:none;
`;

const Center = styled.div.attrs({
    className: ""
})`
    flex: 1;
`;

const Logo = styled.h1.attrs({
    className: "tc"
})``;



const Right = styled.div.attrs({
    className: "flex justify-end items-center"
})`
    flex: 1;
`;


const MenuItem = styled.div.attrs({
    className: "f5 ml3 pointer"
})``;

export default Navbar