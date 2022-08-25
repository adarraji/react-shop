import React from "react";
import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem"
import styled from "styled-components";
import { mobile } from "../../responsive";


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
})`
    ${mobile({ padding: "0px", flexDirection: "column" })}   

`;

export default Categories