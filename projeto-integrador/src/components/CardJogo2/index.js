import BotaoComprar from '../BotaoComprar';
import './style.scss';

const CardJogo2 = ({ id, titulo, imagem, categoria, preco, descricao }, jogo) => {
  return (
    <>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imagem} className="img-fluid rounded-start" alt="imagem do jogo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{descricao}</p>
            </div>
            <BotaoComprar preco={preco} id={id} jogo={jogo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardJogo2;

