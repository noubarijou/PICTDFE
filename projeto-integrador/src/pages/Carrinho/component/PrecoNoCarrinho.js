import {Link} from 'react-router-dom';
import './style.scss';

const PrecoNoCarrinho = ({id, imagem, titulo, preco, categoria}) => {
    return (
        <>
            <article className="card-jogo-carrinho">
                <Link to={`/jogos/${id}`}>
                    <div>
                        <img className="mb-2" src={imagem} alt={titulo} />
                    </div>
                </Link>
                <div className="mx-3">
                    <p className="fw-bold">{titulo}</p>
                    <p> R$ {" "}
              {`${preco}`.includes(".")
                ? `${preco}`.replace(".", ",")
                : `${preco},00`} </p>
                </div>
                <span>{categoria}</span>
            </article>
        </>
    )
}

export default PrecoNoCarrinho
