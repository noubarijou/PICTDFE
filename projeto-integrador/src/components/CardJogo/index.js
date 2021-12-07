// import React from 'react'
import './style.scss';

const CardJogo = ({ titulo, imagem, categoria, preco }) => {
    return (
        <>
            <article className="card-jogo">
                <img className="mb-2" src={imagem} alt={titulo} />
                <div className="mx-3">
                    <p className="fw-bold">{titulo}</p>
                    <button className="fw-bold">{`R$${preco}`}</button>
                </div>
                <p>{categoria}</p>
            </article>
        </>
    )
}

export default CardJogo;
