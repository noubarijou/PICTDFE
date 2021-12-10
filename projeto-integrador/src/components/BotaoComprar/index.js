import { useContext, useEffect, useState } from "react";
import { CartPlus } from "react-bootstrap-icons";
import {CarrinhoContext } from '../../context/jogoContext';
import { CarrinhoState } from "../../context/jogoContext";

const BotaoComprar = ({preco, id, jogo}) => {
     const {addJogo, rmJogo} = useContext(CarrinhoContext)
  
    const localData = JSON.parse(localStorage.getItem('carrinho'));
    
  return (
    <>
    {
        localData.some((p) => p.id === id) ? 
        <button className="fw-bold" onClick={()=>rmJogo({id})}>
        <CartPlus color="black" size={16} />
        R$ {" "}
        {`${preco}`.includes(".")
          ? `${preco}`.replace(".", ",")
          : `${preco},00`}
      </button> : 
        <button className="fw-bold" onClick={()=>addJogo({id})}>
        <CartPlus color="red" size={16} />
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
