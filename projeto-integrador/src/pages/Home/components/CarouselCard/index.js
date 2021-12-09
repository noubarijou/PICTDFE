import React from 'react'
import { Carousel } from 'react-bootstrap';
import CardJogo from '../../../../components/CardJogo';

const CarouselCard = ({ items, jogos }) => {
    return (
        <Carousel.Item interval={6000}>
            {
                jogos.filter((item, index) => items).map((jogo, index) => {
                    return (
                        <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} categoria={jogo.categoria.nome} preco={jogo.preco} />
                    )
                })
            }
        </Carousel.Item>
    )
}

export default CarouselCard;