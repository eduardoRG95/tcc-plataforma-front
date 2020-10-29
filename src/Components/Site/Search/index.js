import React from 'react';

import { FormControl, Button, Form, Row, Col } from 'react-bootstrap';

import { FiSearch } from 'react-icons/fi';

import './styles.css';

export default function Search() {
    return (
        <div className="search-content col-md-8" >
            <Form>
                <FormControl type="text" placeholder="Pesquisar produtos" />    
                <Button className="button-search"><FiSearch /></Button>
     
            </Form>
        </div>
    );
}