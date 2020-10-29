import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';

import Menu from '../Menu';
import Search from '../Search';
import Cart from '../Cart';
import User from '../User';

import './styles.css';

export default function Header() {
    return (
        <div className="header">
            <div className="justify-content-md-center header-search-cart">
                <Col>
                    <Container>
                        <Row>
                        <div className="logo-search-header col-md-9">
                            <Search />
                        </div>
                        <div className="logo-search-header col-sm-12 col-md-3">
                            <Cart />
                            <User />
                        </div>
                        </Row>
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