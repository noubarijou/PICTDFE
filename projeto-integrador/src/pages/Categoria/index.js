import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import CardJogo2 from "../../components/CardJogo2";
import useAxios from "../../Hooks/useAxios";
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';


const Categoria = () => {
  const { categoriaId } = useParams();

  const categoria = useAxios(`/categoria/${categoriaId}`)

  const [jogos, setJogos] = useState();

  useEffect(() => {
    setJogos(categoria.produtos)
    window.scrollTo(0, 0)
  }, [categoriaId, categoria]);

  return (
    <>
      <Helmet>
        <title>{`Poison Games | ${jogos ? categoria.nome : ''}`}</title>
      </Helmet>

      <div className="linha-carrossel"></div>

      {jogos !== undefined ?
        (
          <section className="jogos align-items-center">
            <section className="entrie-jogos">
              {
                jogos.length !== 0 &&
                jogos !== undefined && jogos.sort((a, b) => a.id - b.id).map((jogo, index) => {
                  return (
                    <CardJogo2 key={jogo.id} id={jogo.id} titulo={jogo.titulo} descricao={jogo.descricao} imagem={jogo.imagem} preco={jogo.preco} />

                  )
                })
              }
            </section>
          </section>
        )
        :
        <div className="modal-loading">
          <Spinner animation="border" />
        </div>}

    </>
  );
};

export default Categoria;
