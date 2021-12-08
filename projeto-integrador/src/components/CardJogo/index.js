// import React from 'react';
import { CartPlus } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import './style.scss';

const CardJogo = ({ id, titulo, imagem, categoria, preco }) => {
    return (
        <>
            <article className="card-jogo">
                <Link to={`/jogos/${id}`}>
                    <img className="mb-2" src={imagem} alt={titulo} />
                </Link>
                <div className="mx-3">
                    <p className="fw-bold">{titulo}</p>
                    <button className="fw-bold">
                        <CartPlus color="black" size={16} />R$ {`${preco}`.includes(".") ? `${preco}`.replace('.', ',') : `${preco},00`}
                    </button>
                </div>
                <span>{categoria}</span>
            </article>
        </>
    )
}

export default CardJogo;

