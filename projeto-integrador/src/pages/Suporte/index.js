import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import {Container} from 'react-bootstrap';
import './style.scss';


const Suporte = () => {
  const validationSchema = Yup.object({
    nomecompleto: Yup.string().max(40, 'Máximo de 40 bagulhinho').required('Tem q botá o nome pow...'),
    email: Yup.string().email('bota um email aí').required('Tem q botá um email pow'),
    mensagem: Yup.string().max(300, "Máximo de 300 bagulhinho na msg")
  })
  const handleSubmit = (values) => {
    Swal.fire(
      'Valeu!',
      'Sua msg foi enviada!',
      'success'
    )
  }  

  return (
    <>
      <Helmet>
        <title>Poison Games | Suporte</title>
      </Helmet>
      <Container id="suporte">
        <h1>Manda um oi panois</h1>
        <div className="linha mb-4"></div>
        <Formik initialValues={{
          nomecompleto: '',
          email: '',
          mensagem: ''
        }} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
          <Form className="form">
            <div>
              <label htmlFor="nomecompleto">Nome Completo</label>
              <Field name="nomecompleto" placeholder="Bota teu nome completo" />
              <p className="error">
                <ErrorMessage name="nomecompleto" />
              </p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="teu email" type="email" />
              <p className="error">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div>
              <label htmlFor="mensagem">Manda tua msg</label>
              <Field
                component="textarea"
                name="mensagem"
                placeholder="tua mensagem..."
              />
              <p className="error">
                <ErrorMessage name="mensagem" />
              </p>
            </div>
            <button className="submit" type="submit">
              Enviar!
            </button>
            </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Suporte;
