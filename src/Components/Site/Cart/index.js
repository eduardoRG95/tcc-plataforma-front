import React from 'react';

import { FormControl, Button, Form, Row, Col } from 'react-bootstrap';

import { FiShoppingCart } from 'react-icons/fi';

import './styles.css';

export default function Cart() {
    return (
        <div className="cart-content col-md-4">
                <FiShoppingCart />
        </div>
    );
}