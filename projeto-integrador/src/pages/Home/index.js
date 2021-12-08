// import React from 'react'
import useAxios from "../../Hooks/useAxios";
import './style.scss'

import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import CardJogo from "../../components/CardJogo";
import { Helmet } from "react-helmet";
import { Spinner } from 'react-bootstrap';

const Home = () => {

    const jogos = useAxios(`/produto`);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [jogos])

    return (
        <div className="content">
            <Helmet>
                <title>Poison Games | Home</title>
            </Helmet>
            {jogos[0] ?
                (<>
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
                        <section className="entrie-jogos">
                            {
                                jogos.filter((item, index) => index < 12).map((jogo, index) => {
                                    return (
                                        <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                                    )
                                })
                            }
                        </section>
                    </section>
                </>)
                :
                <div className="modal-loading">
                    <Spinner animation="border" />
                </div>}
        </div>
    )
}

export default Home;
