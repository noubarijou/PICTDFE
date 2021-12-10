import Helmet from 'react-helmet';
import {useState, useEffect, useContext} from 'react';
import {Container} from 'react-bootstrap';
import { CarrinhoContext } from '../../context/jogoContext';
import './style.scss';
import useAxios from '../../Hooks/useAxios';
import CardJogo from '../../components/CardJogo';
import PrecoNoCarrinho from './component/PrecoNoCarrinho';


const Carrinho = () => {
    const {carrinho} = useContext(CarrinhoContext);
    const jogos = useAxios(`/produto`);
    
    return (
        <>
        <Helmet>
            <title>Poison Games | Carrinho</title>
        </Helmet>
        <Container id="carrinho">
        <h1>Carrinho</h1>
        
        {carrinho.length ? 
        (carrinho.map((e)=> jogos.filter((item, index)=>item.id===e.id).map((i)=> <PrecoNoCarrinho key={e.id} id={e.id} titulo={i.titulo} imagem={i.imagem} preco={i.preco}/>))    
        ):(
        <div className="linha mb-4">FORTALECE AÍ POW</div>
        )

    }
     </Container>    
        </>
    )
}

export default Carrinho;
