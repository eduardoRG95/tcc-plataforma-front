import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';

import { useHistory }  from "react-router-dom";

import './styles.css';

export default function Cart() {

    
    const history = useHistory();
    
    function redirect (){
        history.push('/carrinho');
    }

    return (
        <div className="cart-content col-6">
                <FiShoppingCart onClick={redirect} />
        </div>
    );
}