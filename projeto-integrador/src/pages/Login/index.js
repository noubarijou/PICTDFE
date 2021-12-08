import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router';
import './style.scss';



const Login = () => {
    const navigate = useNavigate();
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('bota um email de verdade...')
            .required('tem que botá um email...'),
            password: Yup.string()
            .min(5, 'pelo menos 5 bagulhinho...')
            .required('tem que botá uma senha'),
        }),
        onSubmit: (values) => {
            console.log(values);
            setIsSubmitSuccess(true)
        },
    }); 
  return (
    <>
      <Helmet>
        <title>Poison Games | Login</title>
      </Helmet>
      <Container id="login">
          {isSubmitSuccess ? (
              navigate('/')
          ) : (
      <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <div className="linha mb-4"></div>
            <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="error_msg">{formik.errors.email}</div>
            ) : null}

            <TextField
              name="password"
              type="password"
              placeholder="senha"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}

            <button type="submit" className="submit">Entrar</button>
            <h5> Não tem conta? <Link to="/cadastro">Crie uma!</Link></h5>
          </form>
          )}
      </Container>
    </>
  );
};
export default Login;