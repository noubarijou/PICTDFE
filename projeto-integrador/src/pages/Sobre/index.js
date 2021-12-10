import { Linkedin } from "react-bootstrap-icons";
import Membros from "./membros.js";
import "./style.scss";
import {Helmet} from 'react-helmet'

const Sobre = () => (
  <>
  <Helmet>
  <title>Poison Games | Sobre</title>
  </Helmet>
  <section id="Sobre">
    <h1>Sobre</h1>
    <div className="linha mb-4"></div>
    <article className="texticulo">
      <p>
        A Poison Games nasceu da ideia de oferecer ao mundo gamer uma plataforma limpa e direta, acesso aos melhores jogos e com preços acessíveis - mesmo que a loja seja fictícia. A equipe da Poison Games é formada originalmente por 3 dos membros que já haviam feito alguns trabalhos juntos. Adicionando uma mestra em front-end e um jovem padawan, a equipe ficou completa.
      </p>
      <p>
        Em pouco mais de uma semana, aplicamos o conteúdo proposto até agora pelo CTD da DH, e o resultado é esse que você pode ver. Com uma abordagem de 'funciona na minha máquina', muitas sessões no Discord lotadas de péssimas piadas (mas muitas risadas) e alguns eventos que nos obrigaram a começar do zero concluímos essa fase do curso com essa aplicação.
      </p>
      <p>
        Agradecemos aos professores pela paciência (especialmente com as anteriormente mencionadas piadas sem graça) e dedicação ao nosso aprendizado. E um valeu em especial pra nossa querida tutora Vi, que diferente dos professores, nos aguenta durante pelo menos 6h por dia há mais de 4 meses - mas nos acompanha desde março de 2021. Fica aqui o nosso agradecimento!
      </p>
      <p>
        Qualquer dúvida, não entre em contato. Qualquer coisa que pareça interessante, pode pegar o código!
        Se tem uma coisa que aprendemos nessa caminhada, é que sem o código alheio, fica quase impossível aprender.
      </p>
      <div className="linha mb-4"></div>
      <p className="assinatura">
        <i>Equipe Poison Games - a melhor loja de jogos da sua rua.</i>
      </p>
    </article>
    <article className="card-membros">
      {
        Membros.map((integrante) => {

          return (
            <div className="membro">
              <div className="foto-perfil">
                <img src={integrante.foto} alt={integrante.nome} />
              </div>
              <div className="informacoes">
                <p>{integrante.nome}</p>
                <div className="linha mb-3"></div>
                <div className="redes-sociais">
                  <a href={integrante.github} target="_blank" rel="noreferrer">
                    <img src={integrante.githubImg} alt="GitHub personalizado com o rosto de cada integrante" />
                  </a>
                  <a href={integrante.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin color="white" size={60} />
                  </a>
                </div>
              </div>
            </div>
          )
        })
      }
    </article>
  </section>
  </>
);

export default Sobre;
