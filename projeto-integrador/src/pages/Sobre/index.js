import { Github, Linkedin } from "react-bootstrap-icons";
import "./style.scss";

const Sobre = () => (
  <section id="Sobre">
    <h1>Sobre</h1>
    <div className="linha mb-4"></div>
    <article className="texticulo">
      <p>A Poison Games nasceu da ideia de oferecer ao mundo gamer uma plataforma limpa e direta, acesso aos melhores jogos e com preços acessíveis - mesmo que a loja seja fictícia. A equipe da Poison Games é formada originalmente por 3 dos membros que já haviam feito alguns trabalhos juntos. Adicionando uma mestra em front-end e um jovem padawan, a equipe ficou completa.</p>
      <p>Em pouco mais de uma semana, aplicamos o conteúdo proposto até agora pelo CTD da DH, e o resultado é esse que você pode ver. Com uma abordagem de 'funciona na minha máquina', muitas sessões no Discord lotadas de péssimas piadas (mas muitas risadas) e alguns eventos que nos obrigaram a começar do zero concluímos essa fase do curso com essa aplicação.</p>
      <p>Agradecemos aos professores pela paciência (especialmente com as anteriormente mencionadas piadas sem graça) e dedicação ao nosso aprendizado. E um valeu em especial pra nossa querida tutora Vi, que diferente dos professores, nos aguenta durante pelo menos 6h por dia há mais de 4 meses - mas nos acompanha desde março de 2021. Fica aqui o nosso agradecimento!</p>
      <p>Qualquer dúvida, não entre em contato. Qualquer coisa que pareça interessante, pode pegar o código!
        Se tem uma coisa que aprendemos nessa caminhada, é que sem o código alheio, fica quase impossível aprender.</p>
      <div className="linha mb-4"></div>
      <p className="assinatura"><i>Equipe Poison Games - a melhor loja de jogos da sua rua.</i></p>
    </article>
    <article className="card-membros">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/889532130495975446/916049906005848134/amigosDoAndreTulio.png"
          alt="amigosdoandre"
        ></img>
        <p>Luiz Gustavo</p>
        <div className="linha mb-3"></div>
        <div>
          <a
            href="https://github.com/luizinbrzado"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github color="white" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/luizinbrzado"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Linkedin color="white" size={30} />{" "}
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/889532130495975446/916049906005848134/amigosDoAndreTulio.png"
          alt="amigosdoandre"
        ></img>
        <p>Paulo Ventura</p>
        <div className="linha mb-3"></div>
        <div>
          <a
            href="https://github.com/noubarijou"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github color="white" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-ventura-50079913/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Linkedin color="white" size={30} />
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/889532130495975446/916049906005848134/amigosDoAndreTulio.png"
          alt="amigosdoandre"
        ></img>
        <p>André Ribeiro</p>
        <div className="linha mb-3"></div>
        <div>
          <a
            href="https://github.com/AndreRibeiro07"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github color="white" size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            {" "}
            <Linkedin color="white" size={30} />
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/889532130495975446/916049906005848134/amigosDoAndreTulio.png"
          alt="amigosdoandre"
        ></img>
        <p>Jennifer Mayumi</p>
        <div className="linha mb-3"></div>
        <div>
          <a
            href="https://github.com/jennimay"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github color="white" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mundodajeje"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Linkedin color="white" size={30} />
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/889532130495975446/916049906005848134/amigosDoAndreTulio.png"
          alt="amigosdoandre"
        ></img>
        <p>Nelson Kobayashi</p>
        <div className="linha mb-3"></div>
        <div>
          <a
            href="https://github.com/NelsonKobayashi"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github color="white" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/nelsonkobayashi"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Linkedin color="white" size={30} />
          </a>
        </div>
      </div>
    </article>
  </section>
);

export default Sobre;
