import Helmet from 'react-helmet';
import Container from 'react-bootstrap';

const Carrinho = () => {
    return (
        <>
        <Helmet>
            <title>Poison Games | Carrinho</title>
        </Helmet>
        <Container id="carrinho">
        <h1>Carrinho</h1>
        <div className="linha mb-4"></div>
        <div className="linha mb-4"></div>
        </Container>
        </>
    )
}

export default Carrinho;
