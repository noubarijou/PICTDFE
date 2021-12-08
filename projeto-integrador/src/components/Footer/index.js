import React from 'react';
import logo from '../../assets/img/logo-poison-modelo1.png';
import { Facebook, Discord, Instagram, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';
import './style.scss';


const Footer = () => {
    return (
        <>
            <footer id="footer" className="main-footer text-white text-center" variant="dark" bg="dark">
                <div className="container-fluid">
                    <section className="row">
                        {/* coluna 1 */}
                        <article id="col1" className="col-md-3 col-sm-6">
                            <div id="footerLogo">
                                <img
                                    alt="Cogumelo roxo com bolinhas verdes e olhos de ponta cabeça"
                                    src={logo}
                                    height="100"
                                    id="logo"
                                    className="d-inline-block align-top"
                                />{' '}
                                <h4>Poison Games</h4>
                            </div>
                            <div id="midiasSociais">
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white px-2" href="#!">
                                            <Instagram color="white" size={25} />
                                        </a>
                                        <a className="text-white px-2" href="#!">
                                            <Facebook color="white" size={25} />
                                        </a>
                                        <a className="text-white px-2" href="#!">
                                            <Twitch color="white" size={25} />
                                        </a>
                                        <a className="text-white px-2" href="#!">
                                            <Discord color="white" size={25} />
                                        </a>
                                        <a className="text-white px-2" href="#!">
                                            <Twitter color="white" size={25} />
                                        </a>
                                        <a className="text-white px-2" href="#!">
                                            <Youtube color="white" size={25} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        {/* coluna 2 */}
                        <article id="col2" className="col-md-3 col-sm-6 d-none d-md-flex"></article>
                        {/* coluna 3 */}
                        <article id="col3" className="col-md-3 col-sm-6 d-none d-md-flex">

                            <ul className="list-unstyled">
                                <li><h6>CATEGORIAS</h6></li>
                                <li>AÇÃO</li>
                                <li>RPG</li>
                                <li>ESTRATÉGIA</li>
                                <li>AVENTURA</li>
                                <li>SIMULADOR</li>
                                <li>ESPORTE</li>
                                <li>CORRIDA</li>
                            </ul>
                        </article>
                        {/* coluna 4 */}
                        <article id="col4" className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><h6>SOBRE</h6></li>
                                <li><h6>SUPORTE</h6></li>
                                <li><h6>MINHA CONTA</h6></li>
                                <li><h6>JOGOS</h6></li>

                            </ul>
                        </article>

                    </section>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center"></p>
                        &copy;{new Date().getFullYear()}  Poison Games - All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
