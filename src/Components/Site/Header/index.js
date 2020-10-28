import React from 'react';
import { Col, Container } from 'react-bootstrap';

import Menu from '../Menu';
import Search from '../Search';
import Cart from '../Cart';
import User from '../User';

import './styles.css';

export default function Header() {
    return (
        <div className="header">
            <div className="justify-content-md-center header-search-cart">
                <Col md={24}>
                    <Container>
                        <Search />
                        <Cart />
                        <User />
                    </Container>
                </Col>
            </div>
            <div className="justify-content-md-center menu-header">
                <Col md={24}>
                    <Menu />
                </Col>
            </div>
        </div>
    );
}