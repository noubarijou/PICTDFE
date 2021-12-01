import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/lojaAPI';
import { Helmet } from 'react-helmet';

const Categorias = () => {
    return (
        <>
        <Helmet>
            <title>1UP Games | Categorias</title>
        </Helmet>
        </>
    )

}

export default Categorias;