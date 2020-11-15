import React, { useEffect, useState } from 'react';

import Header from '../../Components/Site/Header';


import Lists from '../../services/serviceList';

import { Container, Row,Col } from 'react-bootstrap';

import './styles.css';

export default function Produtos() {

    useEffect(() => {   
    }, []);

    return (
        <div className="produtos-container">
            <Header />
            <Container>
                <h1>Produto</h1>
            </Container>
        </div>
    );
}