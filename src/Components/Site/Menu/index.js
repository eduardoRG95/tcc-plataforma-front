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
                    <Dropdown.Item href="/produtos">Categoria 1</Dropdown.Item>
                    <Dropdown.Item href="/Produtos">Categoria 2</Dropdown.Item>
                    <Dropdown.Item href="/Produtos">Categoria 3</Dropdown.Item>
                    <Dropdown.Item href="/produtos">Categoria 4</Dropdown.Item>
                    <Dropdown.Item href="/Produtos">Categoria 5</Dropdown.Item>
                    <Dropdown.Item href="/Produtos">Categoria 6</Dropdown.Item>
                    <Dropdown.Item href="/Produtos">Categoria 7</Dropdown.Item>
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