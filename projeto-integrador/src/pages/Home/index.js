import { useState, useEffect, useCallback } from "react";

import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import api from "../../services/lojaAPI";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/";
import { Carousel, Col, Row } from "react-bootstrap";

const Home = () => {
/*    const [jogo, setJogo] = useState ({});
    const getJogo = async () => {
      try{
        const response = await api.get('/produto')
        console.log(response);
        setJogo(response);
      }catch(error){
        console.log("deu ruim");
      }
    }
      */
  return (
    <>
      <Helmet>
        <title>Poison Games | Home</title>
      </Helmet>
      <Header />
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col md={3} sm={6}>
              <img className="d-block w-100" src="" alt="Second slide" />
            </Col>
            <Col md={3} sm={6} className="d-none d-sm-block">
              <img className="d-block w-100" src="" alt="Second slide" />
            </Col>
            <Col md={3} sm={6} className="d-none d-md-block">
              <img className="d-block w-100" src="" alt="Second slide" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
