// import React from 'react'
import { Link } from "react-router-dom";
import { Button, } from "react-bootstrap";
import useAxios from "../../Hooks/useAxios";
import './style.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardJogo from "../../components/CardJogo";
import { Helmet } from "react-helmet";

const Home = () => {

    const responsive = {
        md: {
            breakpoint: { max: 10000, min: 768 },
            items: 3,
            slidesToSlide: 3
        },
        sm: {
            breakpoint: { max: 768, min: 576 },
            items: 2,
            slidesToSlide: 2
        },
        xs: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const jogos = useAxios(`/produto`);

    return (
        <>
        <Helmet>
        <title>Poison Games | Home</title>
        </Helmet>
            <section className="parallax">
                <article className="apresentacao text-center mx-4">
                    <h2>A melhor loja de games da nossa rua</h2>
                </article>
                <section className="recomendados">
                    <Carousel
                        infinite={true}
                        showDots={true}
                        responsive={responsive}>
                        {
                            jogos.filter((item, index) => index < 6).map((jogo, index) => {
                                return (
                                    <div key={index} className="mb-4 mx-3">
                                        <img src={jogo.imagem} alt={jogo.titulo} />
                                        <h4 className="mt-2">{jogo.titulo}</h4>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </section>
            </section>
            <section className="jogos align-items-center">
                {
                    jogos.filter((item, index) => index < 12).map((jogo, index) => {
                        return (
                            <CardJogo key={index} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Home;
