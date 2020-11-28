import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { FormControl, Button, Form } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

import './styles.css';

export default function Search() {

    const [produto, setProduto] = useState();
    const history = useHistory();

    function RedirectToSearch(){
        history.push('/produto/'+produto);
    }

    return (
        <div className="search-content col-md-8" >
            <Form>
                <FormControl type="text" onChange={e => setProduto(e.target.value)}  placeholder="Pesquisar produtos" />    
                <Button onClick={RedirectToSearch} className="button-search"><FiSearch /></Button>
     
            </Form>
        </div>
    );
}