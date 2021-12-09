import Helmet from 'react-helmet';
import Container from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { CarrinhoState } from '../../context/JogoContext';


const Carrinho = () => {
    const {
        state: {carrinho},
        dispatch,
    } = CarrinhoState();
    const [total, setTotal] = useState();
    useEffect(() => {
        setTotal(carrinho.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [carrinho]);
    return (
        <>
        <Helmet>
            <title>Poison Games | Carrinho</title>
        </Helmet>
        <Container id="carrinho">
        <h1>Carrinho</h1>
        <div className="linha mb-4"></div>
        
        <div className="linha mb-4"></div>
        </Container>
        </>
    )
}

export default Carrinho;
