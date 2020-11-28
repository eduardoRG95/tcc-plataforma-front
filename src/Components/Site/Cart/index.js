import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';

import './styles.css';

export default function Cart() {
    return (
        <div className="cart-content col-6">
                <FiShoppingCart />
        </div>
    );
}