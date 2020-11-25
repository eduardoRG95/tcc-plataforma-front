import React, { useEffect ,useState } from 'react';

import List from '../../Components/Produtos/List';

import Lists from '../../services/serviceList';

import { Container  } from 'react-bootstrap';

import Footer from '../../Components/Site/Footer';
import Header from '../../Components/Site/Header';

import './styles.css';

export default function Search(props) {

    const [listProdutos, setListProdutos] = useState([]);

    useEffect(() => {
        GetListProdutos(props.match.params.name);
    }, []);

    async function GetListProdutos(search) {
        const response = await Lists('produto/'+search);
        setListProdutos(response.data)
    }

return (
    <div>
         <Header />
         <div className="content-home">
            <Container className="content-search">
                    {listProdutos.length > 0 && (
                        <List listProdutos={listProdutos} />
                    )}
                    {listProdutos.length == 0 && (
                        <div className="content-ops">
                            <h3   className="title-ops">OPS...</h3>
                            <span className="legend-ops">A busca não encontrou resultados!</span>
                        </div>
                    )}
            </Container>
            <Footer />
         </div>   
    </div>
);
}