import Home from '../Home';
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Container} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router';



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
            .min(5)
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
      <Container>
          {isSubmitSuccess ? (
              navigate('/')
          ) : (
      <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
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

            <button type="submit">Entrar</button>
            <h3> Não tem conta? <Link to="/cadastro">Crie uma!</Link></h3>
          </form>
          )}
      </Container>
    </>
  );
};
export default Login;