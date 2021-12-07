// import React from 'react'
import { Link } from "react-router-dom";
import { Button, Carousel, Col, Row, Container } from "react-bootstrap";
import useAxios from "../../Hooks/useAxios";
import './style.scss'

const Home = () => {

    const jogos = useAxios(`/produto`);

    return (
        <>
            <section className="parallax">
                <article className="apresentacao text-center mx-4">
                    <h2>A melhor loja de games da nossa rua</h2>
                    <a href="#jogos"><Button variant="success" className="text-uppercase">Confira</Button></a>
                </article>
                <section className="recomendados">
                    <h1>RECOMENDADOS</h1>
                </section>
            </section>
            <section id="jogos">
                {
                    jogos.map((jogo, index) => {
                        return (
                            <h1 key={index+1}>{jogo.titulo}</h1>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Home;
