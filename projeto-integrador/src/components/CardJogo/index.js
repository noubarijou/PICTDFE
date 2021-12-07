// import React from 'react'
import './style.scss';
import { CartPlus } from 'react-bootstrap-icons';

const CardJogo = ({ titulo, imagem, categoria, preco }) => {
    return (
        <>
            <article className="card-jogo">
                <img className="mb-2" src={imagem} alt={titulo} />
                <div className="mx-3">
                    <p className="fw-bold">{titulo}</p>
                    <button className="fw-bold">
                        <CartPlus color="black" size={16} />{`R$${preco}`}</button>
                </div>
                <p>{categoria}</p>
            </article>
        </>
    )
}

export default CardJogo;
