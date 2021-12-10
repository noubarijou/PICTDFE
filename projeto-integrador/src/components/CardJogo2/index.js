import { Link } from "react-router-dom";
import BotaoComprar from '../BotaoComprar';
import './style.scss';

const CardJogo2 = ({ id, titulo, imagem, categoria, preco, descricao, jogo }) => {
  return (
    <>
      <div id="card" className="card mb-3" >

        <div id="row" className="row g-0">

          <div className="imagem col-md-4">
            <Link to={`/jogos/${id}`}>
              <img src={imagem} className="img-fluid rounded-start" alt="imagem do jogo" />
            </Link>
          </div>

          <div className="col-md-6">
            <div className="card-body ">
              <h5 className="card-title ">{titulo}</h5>
              <div className="linha-carrossel"></div>
              <p className="card-text " >{descricao}</p>
            </div>
          </div>

          <div className="botao col-md-2">
            <BotaoComprar preco={preco} id={id} jogo={jogo} />
          </div>
        </div>

      </div>
    </>
  )
}

export default CardJogo2;

