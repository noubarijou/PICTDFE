import './style.scss';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        1up games
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Jogos</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Ação</NavDropdown.Item>
                                <NavDropdown.Item href="#">RPG</NavDropdown.Item>
                                <NavDropdown.Item href="#">Estrategia</NavDropdown.Item>
                                <NavDropdown.Item href="#">Aventura</NavDropdown.Item>
                                <NavDropdown.Item href="#">Simulador</NavDropdown.Item>
                                <NavDropdown.Item href="#">Esporte</NavDropdown.Item>
                                <NavDropdown.Item href="#">Corrida</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Sobre</Nav.Link>
                            <Nav.Link href="#">Suporte</Nav.Link>
                            <NavDropdown title="Entrar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#">Cadastrar</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" title="Carrinho">
                                {/* icone do carrinho */}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;