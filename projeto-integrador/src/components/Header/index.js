import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo-poison-modelo1.png'
import './style.scss'

const Header = () => {
    return (
        <>
           <header>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/" id="brand">
                            <img
                                alt="Cogumelo roxo com bolinhas verdes e olhos de ponta cabeça"
                                src={logo}
                                height="40"
                                id="logo"
                                className="d-inline-block align-top"
                            />{' '}
                            Poison games
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link><Link to="/jogos">Jogos</Link></Nav.Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown" variant="dark">
                                    <NavDropdown.Item><Link to="/categorias/1">Ação</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/2">RPG</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/3">Estratégia</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/4">Aventura</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/5">Simulador</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/6">Esporte</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/categorias/7">corrida</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>
                                <Nav.Link><Link to="/suporte">Suporte</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Entrar" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/cadastrar">Cadastrar</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link title="Carrinho">
                                    {/* icone do carrinho */}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header;
