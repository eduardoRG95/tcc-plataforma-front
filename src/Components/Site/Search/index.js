import React from 'react';

import { FormControl, Button, Form  } from 'react-bootstrap';

import './styles.css';

export default function Search() {
    return (
        <div className="search-content">
             <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
}