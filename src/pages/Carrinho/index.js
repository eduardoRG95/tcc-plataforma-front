import React, { useEffect, useState } from 'react';

import Header from '../../Components/Site/Header';

import ListsCart from '../../services/serviceCart';


import semFoto from '../../assets/sem-foto.jpg'; // with import

import { Container } from 'react-bootstrap';

import './styles.css';

export default function Cart() {

    const [reponseProductsCart, setProductsCart ] = useState([]);


    useEffect(() => {
        getProductsCart();
    }, []);

     async function getProductsCart(){
        var arrProducts = JSON.parse((document.cookie));
        await arrProducts.forEach(async id => {
            const response = await ListsCart('Carrinho/'+id);   
            madeList(response.data.shift())        
        });
    }
     function madeList (list) {
        setProductsCart(list)  
     } 
     function madeListHtml(item){
         console.log(item)
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

    return (
        <div>
            <Header />
            <div className="cart-container">
                <Container>
                    <h1>Carrinho</h1>
                    <ul className="list-produtos">
                     {madeListHtml(reponseProductsCart)}
                    </ul>
                </Container>
            </div>

        </div>    
    );
}