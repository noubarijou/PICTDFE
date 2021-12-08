import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";
import { CartPlus } from 'react-bootstrap-icons';
import { Spinner } from 'react-bootstrap';

import './style.scss';

const Jogo = () => {

    const [jogo, setJogo] = useState();
    const { jogoId } = useParams();
    const jogos = useAxios(`/produto`);

    console.log(jogoId)

    useEffect(() => {
        setJogo(jogoId);
        window.scrollTo(0, 0)
    }, [jogoId])

    return (
        <div className="content">
            <Helmet>
                <title>{`Poison Games | ${jogos.filter((item, index) => item.id === parseInt(jogo)).map((e) => {
                    return (
                        e.titulo
                    )
                })}`}</title>
            </Helmet>
            {jogos[jogoId]
                ?
                (<section className="jogo-completo my-4 px-sm-5 px-md-3 ">
                    <article className="mb-3 mb-md-0 me-md-4 jogo-imagem">
                        <img className="w-100" src={
                            jogos.filter((item, index) => item.id === parseInt(jogo)).map((e) => {
                                return (
                                    e.imagem
                                )
                            })
                        } alt="" />
                    </article>
                    <article className="jogo-info">
                        <h1>
                            {jogos.filter((item, index) => item.id === parseInt(jogo)).map((e) => {
                                return (
                                    e.titulo
                                )
                            })}
                        </h1>
                        <div className="linha mb-3"></div>
                        <h4>
                            Sinopse
                        </h4>
                        <p>
                            {jogos.filter((item, index) => item.id === parseInt(jogo)).map((e) => {
                                return (
                                    e.descricao
                                )
                            })}
                        </p>
                        <button className="fw-bold">
                            <CartPlus color="black" size={16} />R$ {jogos.filter((item, index) => item.id === parseInt(jogo)).map((e) => {
                                return (
                                    `${e.preco}`.includes(".") ? `${e.preco}`.replace('.', ',') : `${e.preco},00`
                                )
                            })}
                        </button>
                    </article>
                </section>)
                :
                <div className="modal-loading">
                    <Spinner animation="border" />
                </div>
            }
        </div>
    )
}

export default Jogo
