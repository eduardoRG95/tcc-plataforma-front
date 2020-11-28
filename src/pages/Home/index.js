import React, { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';

import Lists from '../../services/serviceList';

import Footer from '../../Components/Site/Footer';
import Header from '../../Components/Site/Header';
import List from '../../Components/Produtos/List';

import './styles.css';
export default function Home() {

    const [listProdutos, setListProdutos] = useState([]);

    async function GetListProdutos() {
        const response = await Lists('produto');
        setListProdutos(response.data)
    }

    useEffect(() => {
        GetListProdutos();
    }, []);

    return (
        <div>
            <Header />
            <Container>
                <div className="content-home">
                    {listProdutos.length > 0 && (
                        <List listProdutos={listProdutos} />
                    )}
                </div>
            </Container>
            <Footer />
        </div>
    );
}