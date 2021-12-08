import React from 'react'
import { Helmet } from 'react-helmet'
import useAxios from "../../Hooks/useAxios";
import './style.scss';
import Carrossel from './Carrossel';
import { Spinner } from 'react-bootstrap';

const Jogos = () => {
  const jogos = useAxios(`/categoria`)
  return (
    <>
      <Helmet>
        <title>Poison Games | Jogos</title>
      </Helmet>
      <section>
        <section className="Jogos">
          {jogos[0] ?
            (jogos.map((e, index) => {
              return (
                <Carrossel key={index} categoria={e.nome} id={e.id} jogo={jogos} />
              )
            }))

            :

            <div className="modal-loading">
              <Spinner animation="border" />
            </div>
          }
        </section>
      </section>

    </>
  )
}

export default Jogos;
