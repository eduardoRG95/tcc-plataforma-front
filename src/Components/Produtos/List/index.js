import React, { useState } from 'react';
import './styles.css';
import { Row, Col, Button,  } from 'react-bootstrap';

import { useHistory }  from "react-router-dom";

import semFoto from '../../../assets/sem-foto.jpg'; // with import

export default function List(props) {

    const [listCart, setListCart] = useState([]);

    // Propriedades produto
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [valor, setValor] = useState();
    const [quantidade, setQuantidade] = useState();

    const history = useHistory();
    
    // Listagem
    const [listagem] = useState(props.listProdutos);

    function saveCart(id) {
        listCart.push(id)
        saveCookie();
    }
    function saveCookie() {
        document.cookie( JSON.stringify(listCart))
    }
    function saveCookie(){
        var cookieString = JSON.stringify(listCart);
        document.cookie = cookieString;
        redirect();
    }

    function redirect (){
        history.push('/carrinho');
    }
    
    // function getCookie(){
    //     alert(document.cookie);
    // }


    const itens = listagem.map((item) =>
        <li key={item.id} className="item-list-produtos">
            <div className="img-list"><img src={semFoto} className="img-products" /></div>
            <span className="item-name"> {item.nome}  </span>
            <span className="item-valor"> R$ {item.valor} </span>
            <Button className="item-button-sale" onClick={e => saveCart(item.id)} variant="success"> Comprar </Button>
        </li>
    );
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <ul className="list-produtos">
                        {itens}
                    </ul>
                </Col>
            </Row>


        </div>
    );
}