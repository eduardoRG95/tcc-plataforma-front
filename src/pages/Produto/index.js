import React, { useEffect, useState } from 'react';

import Header from '../../Components/Site/Header';


import { Container } from 'react-bootstrap';

import './styles.css';

export default function Produtos() {

    return (
        <div className="produtos-container">
            <Header />
            <Container>
                <h1>Produto</h1>
            </Container>
        </div>
    );
}