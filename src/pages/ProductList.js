import React, { useState } from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";



const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest");

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        })
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={handleFilters} name="color" defaultValue="Color">
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select onChange={handleFilters} name="size" defaultValue="Size">
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>s
                </Filter>
                <Filter>
                    <FilterText >Sort Products:</FilterText>
                    <Select onChange={event => setSort(event.target.value)} name="sort" defaultValue="Newest">
                        <Option vlaue="newest">Newest</Option>
                        <Option vlaue="asc">Price (asc)</Option>
                        <Option vlaue="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/ >
            <Newsletter />
            <Footer />
        </Container>
    )
}

const Container = styled.div``;

const Title = styled.h1.attrs({
    className: "ma3"
})``;

const FilterContainer = styled.div.attrs({
    className: "flex justify-between"
})``;

const Filter = styled.div.attrs({
    className: "ma3"
})`
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span.attrs({
    className: "f5 fw6 mr3"
})`
    ${mobile({ marginRight: "0px" })}

`;

const Select = styled.select.attrs({
    className: "pa2 mr3"
})`
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

export default ProductList