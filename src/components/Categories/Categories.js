import React from "react";
import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem"
import styled from "styled-components";


const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => (
                    <CategoriesItem item={item} key={item.id} />
                ))
            }
        </Container>
    )
}


const Container = styled.div.attrs({
    className: "pa4 flex justify- between"
})``;

export default Categories