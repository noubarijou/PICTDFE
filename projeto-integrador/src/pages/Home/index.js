// import React from 'react'
import { Link } from "react-router-dom";
import { Button, } from "react-bootstrap";
import useAxios from "../../Hooks/useAxios";
import './style.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {

    const responsive = {
        // md: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 3,
        //     slidesToSlide: 3
        // },
        sm: {
            breakpoint: { max: 4000, min: 576 },
            items: 3,
            slidesToSlide: 3
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
            <section className="parallax">
                <article className="apresentacao text-center mx-4">
                    <h2>A melhor loja de games da nossa rua</h2>
                    <a href="#jogos"><Button variant="success" className="text-uppercase">Confira</Button></a>
                </article>
                <section className="recomendados">
                    <Carousel
                        infinite={true}
                        showDots={true}
                        responsive={responsive}>
                        {
                            jogos.filter((item, index) => index < 6).map((jogo, index) => {
                                return (
                                    <div key={index + 1} className="mb-4">
                                        <img src={jogo.imagem} alt={jogo.titulo} />
                                        <h4 className="mt-2">{jogo.titulo}</h4>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </section>
            </section>
            <section>

            </section>
        </>
    )
}

export default Home;
