import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Presentación </span> 
            </h1>
            <p className="home-about-body">
            🚀 ¡Hola! Soy Juan David, un apasionado de la programación con una actitud positiva y un fuerte deseo de aprender y crecer. He adquirido habilidades en HTML CSS JAVASCRIPT REACT  Estoy buscando una oportunidad para contribuir en un equipo dinámico y seguir desarrollándome profesionalmente. ¡Gracias por considerar mi perfil!
              <br />
              <br />
              <br />
              <i>
                <b className="purple">
                  Cadena de bloques
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por el desarrollo de productos.
              con
              <b className="purple">Javascript</b> y
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca  marcos de Javascript modernos

                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              No dude en <span className="purple">Conectar </span>Conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Juan9999K"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
               
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juan-trujillo-64bbba174/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
