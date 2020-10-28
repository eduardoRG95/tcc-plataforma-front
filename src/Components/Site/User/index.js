import React from 'react';

import { FormControl, Button, Form, Row, Col } from 'react-bootstrap';

import { FiUser } from 'react-icons/fi';

import './styles.css';

export default function User() {
    return (
        <div className="cart-content col-md-4" >
               <span> <FiUser /> </span>
        </div>
    );
}