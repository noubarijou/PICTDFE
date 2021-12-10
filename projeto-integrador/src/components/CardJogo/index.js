// import React from 'react';
import { Link } from "react-router-dom";
import BotaoComprar from '../BotaoComprar';
import './style.scss';

const CardJogo = ({ id, titulo, imagem, categoria, preco }, jogo) => {
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
                    <BotaoComprar preco={preco} id={id} jogo={jogo}/>
                </div>
                <span>{categoria}</span>
            </article>
        </>
    )
}

export default CardJogo;

