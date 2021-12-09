// import React from 'react';
import { CartPlus } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import BotaoComprar from '../BotaoComprar';
import './style.scss';

const CardJogo = ({ id, titulo, imagem, categoria, preco }) => {
    return (
        <>
            <article className="card-jogo">
                <Link to={`/jogos/${id}`}>
                    <div>
                        <img className="mb-2" src={imagem} alt={titulo} />
                    </div>
                </Link>
                <div className="mx-3">
                    <p className="fw-bold">{titulo}</p>
                    <BotaoComprar preco={preco}/>
                </div>
                <span>{categoria}</span>
            </article>
        </>
    )
}

export default CardJogo;

