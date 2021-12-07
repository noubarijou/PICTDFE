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
                                <Nav.Link as={Link} to="/jogos">Jogos</Nav.Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown" variant="light">
                                    <NavDropdown.Item as={Link} to="/categorias/1">Ação</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/2">RPG</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/3">Estratégia</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/4">Aventura</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/5">Simulador</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/6">Esporte</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categorias/7">Corrida</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                                <Nav.Link as={Link} to="/suporte">Suporte</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Entrar" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/cadastrar">Cadastrar</NavDropdown.Item>
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
