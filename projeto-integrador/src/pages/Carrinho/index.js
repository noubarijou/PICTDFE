import Helmet from "react-helmet";
import { useState, useContext, useCallback } from "react";
import { Container } from "react-bootstrap";
import { CarrinhoContext } from "../../context/jogoContext";
import "./style.scss";
import useAxios from "../../Hooks/useAxios";
import PrecoNoCarrinho from "./component/PrecoNoCarrinho";

const Carrinho = () => {

  const { carrinho, rmJogo } = useContext(CarrinhoContext);
  const jogos = useAxios(`/produto`);

  let precoTotal = 0;

  carrinho.map((e => precoTotal += e.preco))

  carrinho.map((jogo) => (jogo))

  return (
    <>
      <Helmet>
        <title>Poison Games | Carrinho</title>
      </Helmet>
      <Container id="carrinho">
        <h1>Carrinho</h1>
        <div className="linha"></div>

        {carrinho.length ? (
          <>
            {carrinho.map((i) => (<PrecoNoCarrinho key={i.id} id={i.id} titulo={i.titulo} imagem={i.imagem} preco={i.preco} />
            ))}
            <h1>
              Total R$ {`${precoTotal}`.includes(".") ?
                `${precoTotal}`.replace(".", ",")
                : `${precoTotal},00`}
            </h1>
          </>
        ) : (
          <div className="mb-4">FORTALECE AÍ POW</div>
        )}
      </Container>
    </>
  );
};

export default Carrinho;
