import React, { useEffect, useState } from 'react';

import Header from '../../Components/Site/Header';

import ListsCart from '../../services/serviceCart';

import { useHistory } from "react-router-dom";

import semFoto from '../../assets/sem-foto.jpg'; // with import

import { Container, Button, Form, FormControl } from 'react-bootstrap';

import './styles.css';

export default function Cart() {

    const [reponseProductsCart, setProductsCart ] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getProductsCart();
    }, []);

     async function getProductsCart(){
        if(localStorage.getItem('id')){
            const response = await ListsCart('Carrinho/'+ localStorage.getItem('id')); 
            setProductsCart(response.data[0])  
        }
    }
     function madeListHtml(item){
        if(item){
            return (
                <li key={item.id} className="list-carts">
                    <div className="img-list-cart"><img src={semFoto} className="img-products" /></div>
                    <h2 className="name-cart"> {item.nome} </h2>
                    <span className="valor-cart"> R$ {item.valor} </span>
                </li>
            )           
        }
     }

     
    function RedirectToHome(){
        history.push('/');
    }


    return (
        <div>
            <Header />
            <div className="cart-container">
                <Container>
                    <h1>Carrinho</h1>
                    <ul className="list-produtos">
                        {madeListHtml(reponseProductsCart)}
                    </ul>
                    <div className="calculate-freigh">
                    <Form>
                        <FormControl type="text" className="input-frete" placeholder="Calcular Frete" />    
                        <Button className="button-search">Calcular</Button>
            
                    </Form>
                    </div>
                    <div className="actions-buttons-cart">
                        <Button onClick={RedirectToHome} className="continuar-comprando">Continuar Comprando</Button>
                        <Button className="btn-success finalizar-pedido">Finalizar compra</Button>
                    </div>
                </Container>
            </div>

        </div>    
    );
}