import React, { useEffect, useState } from 'react';

import Header from '../../Components/Site/Header';

import { Container, Row,Col } from 'react-bootstrap';

import './styles.css';

export default function Cart() {

    useEffect(() => {
        getProductsCart();
    }, []);

    function getProductsCart(){
        var arr = JSON.parse((document.cookie));
        console.log(arr)
    }


    return (
        <div>
            <Header />
            <div className="cart-container">
                <Container>
                    <h1>Carrinho</h1>
                </Container>
            </div>

        </div>    
    );
}