import React from 'react';
import { Col } from 'react-bootstrap';

import Menu from '../Menu';
import Search from '../Search';

import './styles.css';

export default function Header() {
    return (
        <div className="header">
                 <div className="justify-content-md-center header-search-cart">
                    <Col md={24}>
                        <Search />
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