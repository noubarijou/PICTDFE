// import React from 'react'
import useAxios from "../../Hooks/useAxios";
import './style.scss'

import { Carousel } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import CardJogo from "../../components/CardJogo";
import { Helmet } from "react-helmet";

const Home = () => {

    const jogos = useAxios(`/produto`);

    return (
        <>
            <Helmet>
                <title>Poison Games | Home</title>
            </Helmet>
            <section className="parallax transbox">
                <article className="apresentacao text-center mx-4">
                    <h2>A melhor loja de games da sua rua</h2>
                </article>
                <section className="recomendados">
                    <Carousel>
                        <Carousel.Item interval={6000}>
                            {
                                jogos.filter((item, index) => index < 3).map((jogo, index) => {
                                    return (
                                        <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                                    )
                                })
                            }
                        </Carousel.Item>
                        <Carousel.Item interval={6000}>
                            {
                                jogos.filter((item, index) => index < 6 && index >= 3).map((jogo, index) => {
                                    return (
                                        <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                                    )
                                })
                            }
                        </Carousel.Item>
                    </Carousel>
                </section>
            </section>
            <section className="jogos align-items-center">
                {
                    jogos.filter((item, index) => index < 12).map((jogo, index) => {
                        return (
                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Home;
