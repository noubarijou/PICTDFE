import { Link } from "react-router-dom";
import BotaoComprar from '../BotaoComprar';
import './style.scss';

const CardJogo2 = ({ id, titulo, imagem, categoria, preco, descricao, jogo }) => {
  return (
    <>
      <div className="card2 mb-5" >

        <div className="row g-0">

          <div className="imagem col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <Link to={`/jogos/${id}`}>
              <img src={imagem} className="img-fluid rounded-start" alt="imagem do jogo" />
            </Link>
          </div>
          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-6">
            <div className="card-body ">
              <h5 className="card-title ">{titulo}</h5>
              <div className="linha-carrossel"></div>
              <p className="card-text " >{descricao}</p>
            </div>
          </div>
          <div className="botao col-12 col-sm-4 col-md-12 col-lg-1 col-xl-2">
            <BotaoComprar preco={preco} id={id} jogo={jogo} />
          </div>
        </div>

      </div>
    </>
  )
}

export default CardJogo2;

