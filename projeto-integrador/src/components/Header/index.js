import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-poison-modelo1.png'
import './style.scss'
import { CartPlus } from 'react-bootstrap-icons';
import useWindowDimensions from '../../Hooks/useWindowDimensions';


const Header = () => {

    const { height, width } = useWindowDimensions();

    console.log(width);
    return (
        <>
            <header>
                {
                    width < 992 ?
                        <Navbar bg="dark" variant="dark" expand="lg">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Brand as={Link} to="/" id="brand" className="align-items-center">
                                    <img
                                        alt="Cogumelo roxo com bolinhas verdes e olhos tonto de ponta cabeça"
                                        src={logo}
                                        height="50"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                <Nav.Link as={Link} to="/carrinho" title="Carrinho" >
                                    <CartPlus color="white" size={30} />
                                </Nav.Link>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mx-auto">
                                        <Nav.Link as={Link} to="/">Jogos</Nav.Link>
                                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
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
                                    <Nav id="nav-cart">
                                        <NavDropdown title="Entrar" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/cadastro">Cadastrar</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>


                        : // SE NÃO FOR /\ VAI SER V


                        <Navbar bg="dark" variant="dark" expand="lg">
                            <Container fluid>
                                <Navbar.Brand as={Link} to="/" id="brand" className="align-items-center">
                                    <img
                                        alt="Cogumelo roxo com bolinhas verdes e olhos tonto de ponta cabeça"
                                        src={logo}
                                        height="50"
                                        className="d-inline-block align-top"
                                    />
                                    Poison games
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mx-auto">
                                        <Nav.Link as={Link} to="/">Jogos</Nav.Link>
                                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
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
                                    <Nav id="nav-cart">
                                        <NavDropdown title="Entrar" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/cadastrar">Cadastrar</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link as={Link} to="/carrinho" title="Carrinho" >
                                            <CartPlus color="white" size={30} />
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                }
            </header>
        </>
    )
}

export default Header;
