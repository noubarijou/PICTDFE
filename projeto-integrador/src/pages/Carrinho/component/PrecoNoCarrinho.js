import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarrinhoContext } from '../../../context/jogoContext';
import './style.scss';

const PrecoNoCarrinho = ({ id, imagem, titulo, preco, categoria }) => {
    const { carrinho, rmJogo } = useContext(CarrinhoContext);

    return (
        <>
            <article className="card-jogo-carrinho row g-0">
                <div className="imagem col-md-4">
                    <Link to={`/jogos/${id}`}>
                        <img className="mb-2 w-100" src={imagem} alt={titulo} />
                    </Link>
                </div>
                <div className="mx-3 col-md-6">
                    <p className="fw-bold">{titulo}</p>
                    <span id="rm-jogo" onClick={(() => rmJogo({ id, imagem, titulo, preco, categoria }))}>Remover</span>
                </div>
                <div className="valor col-md-1">
                    <p> R$ {" "}
                        {`${preco}`.includes(".")
                            ? `${preco}`.replace(".", ",")
                            : `${preco},00`} </p>
                </div>
                <span>{categoria}</span>
            </article>
            <div className="linha-carrinho"></div>
        </>
    )
}

export default PrecoNoCarrinho
