import React from 'react'

import './style.scss';
import { Carousel } from 'react-bootstrap';
import CardJogo from "../../../components/CardJogo";
import { Spinner } from 'react-bootstrap';


const Carrossel = ({ categoria, id, jogo }) => {
  return (
    <>
      {jogo[0] ?
        (
          <div className="jogo-categoria">
            <h4>{categoria}</h4>
            <div className="linha-carrossel"></div>
            <Carousel>
              <Carousel.Item interval={5000 * 1000}>
                {
                  jogo.filter((item, index) => item.id === id).map((e) => {
                    return (
                      e.produtos.filter((item, index) => index < 3).map((jogo, index) => {
                        return (
                          <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} preco={jogo.preco} categoria={e.nome} />
                        )
                      })
                    )
                  })
                }
              </Carousel.Item>
              <Carousel.Item interval={5000 * 1000}>
                {
                  jogo.filter((item, index) => item.id === id).map((e) => {
                    return (
                      e.produtos.filter((item, index) => index >= 3 && index < 6).map((jogo, index) => {
                        return (
                          <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} preco={jogo.preco} categoria={e.nome} />
                        )
                      })
                    )
                  })
                }
              </Carousel.Item>
              <Carousel.Item interval={5000 * 1000}>
                {
                  jogo.filter((item, index) => item.id === id).map((e) => {
                    return (
                      e.produtos.filter((item, index) => index >= 6 && index < 9).map((jogo, index) => {
                        return (
                          <CardJogo key={index} id={jogo.id} titulo={jogo.titulo} imagem={jogo.imagem} preco={jogo.preco} categoria={e.nome} />
                        )
                      })
                    )
                  })
                }
              </Carousel.Item>
            </Carousel>
          </div>
        )
        :
        <div className="modal-loading">
          <Spinner animation="border" />
        </div>}
    </>
  )
}

export default Carrossel;
