import React from 'react';

import { FormControl, Button, Form, Row, Col } from 'react-bootstrap';

import { FiUser } from 'react-icons/fi';

import './styles.css';

export default function User() {
    return (
        <div className="user-content col-md-6" >
               <span> <FiUser /> </span>
        </div>
    );
}