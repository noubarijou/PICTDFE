import { useContext, useEffect, useState } from "react";
import { CartPlus, CartFill, CartDash } from "react-bootstrap-icons";
import { CarrinhoContext } from '../../context/jogoContext';
import { CarrinhoState } from "../../context/jogoContext";
import './style.scss'

const BotaoComprar = ({ preco, jogo, id}) => {
  const { carrinho, addJogo, rmJogo } = useContext(CarrinhoContext)

  return (
    <>
      {
        carrinho.some((p) => p.id === id)

          ?

          <button className="btn-compra fw-bold devolver" onClick={() => rmJogo({ jogo })}>
            <CartDash color="black" size={16} />
            <p>
              R$ {" "}
              {`${preco}`.includes(".")
                ? `${preco}`.replace(".", ",")
                : `${preco},00`}
            </p>
          </button>

          :

          <button className="btn-compra fw-bold comprar" onClick={() => addJogo({jogo })}>
            <CartPlus color="black" size={16} />
            R$ {" "}
            {`${preco}`.includes(".")
              ? `${preco}`.replace(".", ",")
              : `${preco},00`}
          </button>
      }

    </>
  );
};

export default BotaoComprar;
