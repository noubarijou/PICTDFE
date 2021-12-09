import React from "react";
import { Helmet } from "react-helmet";
import CardJogo2 from "../../components/CardJogo2";
import useAxios from "../../Hooks/useAxios";
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Categoria = () => {

  const categorias = useAxios(`/categoria`)
  const [categoria, setCategoria] = useState();
  const { categoriaId } = useParams();
  useEffect(() => {
    setCategoria(categoriaId)
    window.scrollTo(0, 0)
  }, [categoriaId]);

  return (
    <>
      <Helmet>
        <title>Poison Games | Categorias</title>
      </Helmet>

      {categorias[0] ?
        (
          <section className="jogos align-items-center">
            <section className="entrie-jogos">
              {
                categorias.filter((item, index) => item.id === parseInt(categoria)).map((e) => {
                  return (
                    e.produtos.map((jogo, index) => {
                      return (
                        <CardJogo2 key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} preco={jogo.preco} categoria={e.nome} />
                      )
                    })
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
