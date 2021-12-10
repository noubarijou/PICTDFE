import { useContext, useEffect, useState } from "react";
import { CartPlus, CartFill, CartDash } from "react-bootstrap-icons";
import { CarrinhoContext } from '../../context/jogoContext';
import { CarrinhoState } from "../../context/jogoContext";
import './style.scss'

const BotaoComprar = ({ preco, id, jogo }) => {
  const { carrinho, addJogo, rmJogo } = useContext(CarrinhoContext)

  return (
    <>
      {
        carrinho.some((p) => p.id === id)

          ?

          <button className="fw-bold devolver" onClick={() => rmJogo({ id })}>
            <CartDash color="black" size={16} />
            <p>
              R$ {" "}
              {`${preco}`.includes(".")
                ? `${preco}`.replace(".", ",")
                : `${preco},00`}
            </p>
          </button>

          :

          <button className="fw-bold comprar" onClick={() => addJogo({ id })}>
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
