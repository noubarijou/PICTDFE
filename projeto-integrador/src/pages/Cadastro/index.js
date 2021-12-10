import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "../../assets/css/form.scss";


const Cadastro = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const navigate = useNavigate();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const validationSchema = Yup.object({
    nomecompleto: Yup.string().max(40, 'Máximo de 40 bagulhinho').required('Tem q botá o nome pow...'),
    datadenascimento: Yup.date().required('tem q botá a data'),
    email: Yup.string().email('bota um email aí').required('Tem q botá um email pow'),
    senha: Yup.string().min(8, 'no mínimo 8 bagulhinho').required('Tem q botá a senha'),
    senhaconfirma: Yup.string().oneOf([Yup.ref('senha')], 'tem q ser a mesma senha...').required('Tem q botá a senha...')
  });
  return (
    <>
      <Helmet>
        <title>Poison Games | Cadastro</title>
      </Helmet>
      <Container id="cadastro" className="fundo">
        <Formik initialValues={{
          nomecompleto: '',
          datadenascimento: '',
          email: '',
          senha: '',
          senhaconfirma: ''
        }} validationSchema={validationSchema} onSubmit={(values) => {
          console.log(values);
          setIsSubmitSuccess(true)
        }
        }>
          {isSubmitSuccess ? (
            navigate('/login')
          ) : (
            <>
              <h1>Cadastro</h1>
              <div className="linha mb-4"></div>
              <Form className="form">
                  <div>
                    <label htmlFor="nomecompleto">Nome completo</label>
                    <Field className="input-field" name="nomecompleto" placeholder="Bota teu nome completo" />
                    <p className="error"><ErrorMessage name="nomecompleto" /></p>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field className="input-field" name="email" placeholder="teu email" type="email" />
                    <p className="error">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div>
                    <label htmlFor="datadenascimento">Data de Nascimento</label>
                    <Field className="input-field" name="datadenascimento" type="date" />
                    <p className="error"><ErrorMessage name="datadenascimento" /></p>
                  </div>
                  <div>
                    <label htmlFor="senha">Defina a senha</label>
                    <Field className="input-field" type="password" name="senha" />
                    <p className="error">
                      <ErrorMessage name="senha" />
                    </p>
                  </div>
                  <div>
                    <label htmlFor="senhaconfirma">Confirme a senha</label>
                    <Field className="input-field" type="password" name="senhaconfirma" />
                    <p className="error">
                      <ErrorMessage name="senhaconfirma" />
                    </p>
                  </div>
                <button className="submit" type="submit">
                  Cadastrar
                </button>
                <p className="contacriada"> Já tem conta? <Link className="linklogin" to="/login">Entre por aqui!</Link></p>
              </Form>
            </>
          )}
        </Formik>
      </Container>


    </>
  );
};

export default Cadastro;
