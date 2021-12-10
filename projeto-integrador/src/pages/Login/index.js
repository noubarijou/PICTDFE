import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../assets/css/form.scss";

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const navigate = useNavigate();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("bota um email de verdade...")
      .required("tem que botá um email..."),
    senha: Yup.string()
      .min(8, "pelo menos 8 bagulhinho...")
      .required("tem que botá uma senha"),
  });

  return (
    <>
      <Helmet>
        <title>Poison Games | Login</title>
      </Helmet>
      <Container id="login" className="fundo">
        <Formik
          initialValues={{
            email: "",
            senha: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            setIsSubmitSuccess(true);
          }}
        >
          {isSubmitSuccess ? (
            navigate("/")
          ) : (
            <>
              <h1>Login</h1>
              <div className="linha mb-4"></div>
              <Form className="form">
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    className="input-field"
                    name="email"
                    placeholder="teu email"
                    type="email"
                  />
                  <p className="error">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div>
                  <label htmlFor="senha">Defina a senha</label>
                  <Field className="input-field" type="password" name="senha" />
                  <p className="error">
                    <ErrorMessage name="senha" />
                  </p>
                </div>
                <button type="submit" className="submit">
                  Entrar
                </button>
                <p className="criarconta">
                  Não tem conta? <Link className="linkcadastro" to="/cadastro">Crie uma!</Link>
                </p>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default Login;
