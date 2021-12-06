import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/lojaAPI';
import { Helmet } from 'react-helmet';
const Carrinho = () => {
    return (
        <>
        <Helmet>
            <title>Poison Games | Carrinho</title>
        </Helmet>
        </>
    )

}

export default Carrinho;