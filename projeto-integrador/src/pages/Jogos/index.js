import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useAxios from "../../Hooks/useAxios";
import "./style.scss";
import Carrossel from "./Carrossel";
import { Spinner } from "react-bootstrap";


const Jogos = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const jogos = useAxios(`/categoria`);
  return (
    <>
      <Helmet>
        <title>Poison Games | Jogos</title>
      </Helmet>
      <section id="jogos-categoria">
        <section className="entrie-jogos">
          {jogos[0] ? (
            jogos.map((e, index) => {
              return (
                <Carrossel
                  key={index}
                  categoria={e.nome}
                  id={e.id}
                  jogo={jogos}
                />
              );
            })
          ) : (
            <div className="modal-loading">
              <Spinner animation="border" />
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Jogos;
