import React from "react";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <Search style={{ fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Ecommerce Store</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px" })}   
`;

const Wrapper = styled.div.attrs({
    className: "flex justify-between items-center pv1 ph3"
})`
     ${mobile({ padding: "10px 0px" })}   
`;


const Left = styled.div.attrs({
    className: "flex items-center"
})`
    flex: 1;
`;


const Language = styled.span.attrs({
    className: "f5 pointer"
})`
     ${mobile({ display: "none" })}   
`;

const SearchContainer = styled.div.attrs({
    className: "ba b--light-gray flex items-center ml3 pa"
})``;

const Input = styled.input.attrs({
    className: ""
})`
    border:none;
    ${mobile({ width: "50px", fontSize: "16px" })}   
`;

const Center = styled.div.attrs({
    className: ""
})`
    flex: 1;
`;

const Logo = styled.h1.attrs({
    className: "tc"
})`
     ${mobile({ fontSize: "16px" })}   
`;



const Right = styled.div.attrs({
    className: "flex justify-end items-center"
})`
    flex: 1;
    ${mobile({ flex: 2, justifyContent: "center" })}   
`;


const MenuItem = styled.div.attrs({
    className: "f5 ml3 pointer"
})`
     ${mobile({ fontSize: "12px", marginLeft: "10px" })}  
`;

export default Navbar