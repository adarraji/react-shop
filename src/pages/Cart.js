import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const STRIPE_PUB_KEY = `${process.env.REACT_APP_STRIPE_PUB_KEY}`;

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    let navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });
                navigate("/success", { state: { stripeData: res.data, cart: cart } });
            } catch (err) {
                console.log(err)
            }
        }
        if (stripeToken && cart.total >= 1) {
            makeRequest();
        }
    }, [stripeToken, navigate, cart, cart.total]);

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(4)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img}></Image>
                                    <Details>
                                        <ProductName>
                                            {product.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b>  {product._id}
                                        </ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize>
                                            <b>Size:</b> {product.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <AddIcon />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <RemoveIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>{product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))
                        }
                        <HR />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="AD Shop"
                            image="https://cdn.pixabay.com/photo/2022/08/06/17/27/artificial-intelligence-7369048_960_720.jpg"
                            shippingAddress
                            billingAddress
                            description="  Your total is $20"
                            amount={2000}
                            token={onToken}
                            stripeKey={STRIPE_PUB_KEY}
                        >
                            <SummaryButton>Checkout Now</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div``;

const Wrapper = styled.div.attrs({
    className: "pa3"
})`
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1.attrs({
    className: "fw3 tc"
})``;

const Top = styled.div.attrs({
    className: "flex items-center justify-between pa3"
})``;

const TopButton = styled.button.attrs({
    className: "pa2 fw6 pointer"
})`
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span.attrs({
    className: "underline pointer mv0 mh2"
})``;


const Bottom = styled.div.attrs({
    className: "flex justify-between tl"
})`
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex:3;
`;

const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px
`;

const Product = styled.div.attrs({
    className: "flex flex-between"
})`
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div.attrs({
    className: "flex flex-between"
})`
    flex:2;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div.attrs({
    className: "pa3 flex flex-column justify-around"
})``;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div.attrs({
    className: "flex items-center justify-center flex-column"
})`
    flex:1;
`;

const ProductAmountContainer = styled.div.attrs({
    className: "flex items-center mb3"
})``;

const ProductAmount = styled.div.attrs({
    className: "f4 ma2"
})`
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div.attrs({
    className: "f3 fw2"
})`
    ${mobile({ marginBottom: "20px" })}
`;


const Summary = styled.div.attrs({
    className: "ba b--light-gray br4 pa3 vh-50"
})`
    flex:1;
`;


const SummaryTitle = styled.h1.attrs({
    className: "fw2"
})``;

const SummaryItem = styled.div.attrs({
    className: "mv4 mh0 flex justify-between"
})`
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button.attrs({
    className: "w-100 pa3 white bg-black fw6 pointer"
})``;



export default Cart