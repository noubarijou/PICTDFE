import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
           <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Poison games
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/jogos">Jogos</Link></Nav.Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
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

export default Footer
