import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components";
import { mobile } from "../../responsive";


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ecommerce Store</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "flex tl"
})`
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div.attrs({
    className: "flex-1 pa3 flex flex-column"
})`
    flex: 1;
`;

const Logo = styled.h1.attrs({
    className: ""
})``;

const Desc = styled.p.attrs({
    className: "mv2 mh0"
})``;

const SocialContainer = styled.div.attrs({
    className: "flex"
})``;

const SocialIcon = styled.div.attrs({
    className: "white ma2 flex justify-center items-center"
})`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
`;

const Center = styled.div.attrs({
    className: "flex-1 pa3"
})`
    flex: 1;
    ${mobile({ display: "none" })}   
`;

const Title = styled.h3.attrs({
    className: "mb3"
})``;

const List = styled.ul.attrs({
    className: "ma0 pa0 list flex flex-wrap"
})``;

const ListItem = styled.li.attrs({
    className: "mb1 w-50"
})``;

const Right = styled.div.attrs({
    className: "flex-1 pa3"
})`
    flex: 1;
    ${mobile({ backgroundColor: "lightgray" })}
`;

const ContactItem = styled.div.attrs({
    className: "mb3 flex items-center"
})``;

const Payment = styled.img.attrs({
    className: "w-50"
})``;

export default Footer