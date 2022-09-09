import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import Product from "./Product";
import styled from "styled-components";
import axios from "axios";


const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) { }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => {
                return (
                    Object.entries(filters).every(([key, value]) => {
                        return (
                            item[key].includes(value)
                        )
                    })
                )
            })
        );
        console.log(filteredProducts)
    }, [cat, filters, products]);

    ;

    return (
        <Container className="pa4 flex justify-between flex-wrap">
            {
                filteredProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))
            }
        </Container>
    )
}

const Container = styled.div.attrs({
    className: "pa4 flex justify-between flex-wrap"
})``;

export default Products