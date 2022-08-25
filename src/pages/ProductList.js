import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import styled from 'styled-components';


const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {/* <div className="flex justify-between">
                <div className="ma3">
                    <span className="f5 fw6 mr3">Filter Products:</span>
                    <select className="pa2 mr3" name="color" id="color" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select className="pa2 mr3" name="size" id="size" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className="ma3">
                    <span className="f5 fw6 mr3">Sort Products:</span>
                    <select className="pa2 mr3" name="sort" id="sort" defaultValue={"newest"}>
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price (asc)</option>
                        <option value="prrice-desc">Price (desc)</option>
                    </select>
                </div>
            </div> */}
            <Products />
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
})``;

const FilterText = styled.span.attrs({
    className: "f5 fw6 mr3"
})``;

const Select = styled.select.attrs({
    className: "pa2 mr3"
})``;

const Option = styled.option``;

export default ProductList