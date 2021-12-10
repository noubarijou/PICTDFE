// import React from 'react'
import useAxios from "../../Hooks/useAxios";
import './style.scss'

import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import CardJogo from "../../components/CardJogo";
import { Helmet } from "react-helmet";
import { Spinner } from 'react-bootstrap';
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const Home = () => {

    const { width } = useWindowDimensions();

    const jogos = useAxios(`/produto`);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [jogos]);

    return (
        <>
            <Helmet>
                <title>Poison Games | Home</title>
            </Helmet>
            {jogos[0] ?
                (<>
                    <div className="video-parallax">
                        <section className="parallax transbox">
                            <article className="apresentacao text-center mx-4">
                                <h1>Fortalece a firma aí, compra de nóis</h1>
                            </article>
                            <section className="recomendados">
                                {
                                    width < 767 &&
                                    (
                                        <Carousel>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 0).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 1).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 2).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 3).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 4).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index === 5).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                        </Carousel>
                                    )
                                }
                                {
                                    (width >= 768 && width < 992) &&
                                    (
                                        <Carousel>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index < 2).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index < 4 && index >= 2).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index < 6 && index >= 4).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                        </Carousel>
                                    )
                                }
                                {
                                    (width >= 992) &&
                                    (
                                        <Carousel>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index < 3).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                            <Carousel.Item interval={6000}>
                                                {
                                                    jogos.filter((item, index) => index < 6 && index >= 3).map((jogo, index) => {
                                                        return (
                                                            <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
                                                        )
                                                    })
                                                }
                                            </Carousel.Item>
                                        </Carousel>
                                    )
                                }
                            </section>
                        </section>
                        <video autoPlay loop muted>
                            <source src="./mine.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <section className="jogos align-items-center">
                        <section className="entrie-jogos">
                            {
                                jogos.filter((item, index) => index < 20).map((jogo, index) => {
                                    return (
                                        <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} jogo={jogo} />
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
        </>
    )
}

export default Home;
