import {Link, useParams} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
        <Helmet>
            <title>1UP Games | About</title>
        </Helmet>
        </>
    )
}
export default About;