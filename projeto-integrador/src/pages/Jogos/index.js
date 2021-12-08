import React from 'react'
import { Helmet } from 'react-helmet'
import useAxios from "../../Hooks/useAxios";
import './style.scss';
import Carrossel from './Carrossel';


const Jogos = () => {
  const jogos = useAxios(`/categoria`)
  return (
    <>
      <Helmet>
        <title>Poison Games | Jogos</title>
      </Helmet>
      <section>
        <section className="Jogos">
          <Carrossel categoria={"Ação"} id={1} />
          <Carrossel categoria={"RPG"} id={2} />
          <Carrossel categoria={"Estratégia"} id={3} />
          <Carrossel categoria={"Aventura"} id={4} />
          <Carrossel categoria={"Simulador"} id={5} />
          <Carrossel categoria={"Esportes"} id={6} />
          <Carrossel categoria={"Corrida"} id={7} />

        </section>
      </section>

    </>
  )
}

export default Jogos;
