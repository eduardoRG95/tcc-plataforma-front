import React, { useState } from 'react';
import './styles.css';
import { Row, Col, Button,  } from 'react-bootstrap';

import semFoto from '../../../assets/sem-foto.jpg'; // with import

export default function List(props) {

    // Propriedades produto
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [valor, setValor] = useState();
    const [quantidade, setQuantidade] = useState();

    // Modal de Excluir
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);   
    
    // Modal Alteração
    const [showAlter, setShowAlter] = useState(false);
    const handleAlterClose = () => setShowAlter(false);
    const handleAlterShow = () => setShowAlter(true);
    
    
    // Listagem
    const [listagem] = useState(props.listProdutos);
    
    function DeletarProduto(id) {
        setId(id);
        handleDeleteShow();
    }

    function EditarProduto(item) {
        setId(item.id);
        setNome(item.nome);
        setValor(item.valor);
        setQuantidade(item.quantidade);
        handleAlterShow();
    }


    const itens = listagem.map((item) =>
        <li key={item.id} className="item-list-produtos">
            <div className="img-list"><img src={semFoto} className="img-products" /></div>
            <span className="item-name"> {item.nome}  </span>
            <span className="item-valor"> R$ {item.valor} </span>
            <Button className="item-button-sale" variant="success"> Comprar </Button>
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