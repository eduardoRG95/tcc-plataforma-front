import React from 'react';

import { Container, Dropdown } from 'react-bootstrap';

import './styles.css';

export default function Menu() {
    return (
        <div className="menu-content">
            <Container>
            <Dropdown className="col-3">
                <Dropdown.Toggle id="dropdown-basic">
                   Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/produtos">Produtos</Dropdown.Item>
                    <Dropdown.Item href="/vendedores">Vendedores</Dropdown.Item>
                    <Dropdown.Item href="/clientes">Clientes</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="menu">
                <a href="/produtos" name="Produtos"><span>Categoria 1</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 2</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 3</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 4</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 5</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 6</span></a>
                <a href="/produtos" name="Produtos"><span>Categoria 7</span></a>
            </div>
            </Container>
        </div>
    );
}