import {useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from 'react-bootstrap/Navbar'

const NotFound = () => {
    const navigate = useNavigate();

    setTimeout(() =>{
        navigate('/');
    }, 5000);
    return (
        <>
        <Helmet>
            <title>1UP Games | Não encontrada</title>
        </Helmet>
        <h2>Essa página não existe ;~</h2>
        </>
    )
}
export default NotFound;