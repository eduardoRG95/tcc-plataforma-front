import React, { useEffect ,useState } from 'react';

import List from '../../Components/Produtos/List';

import Lists from '../../services/serviceList';

import { Container  } from 'react-bootstrap';

import Footer from '../../Components/Site/Footer';
import Header from '../../Components/Site/Header';

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
            <Container>
                 {listProdutos.length > 0 && (
                        <List listProdutos={listProdutos} />
                    )}
            </Container>
            <Footer />
     


    </div>
);
}