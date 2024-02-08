import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a tod@s soy <span className="purple">Juan Quimbayo </span>
            de <span className="purple"> Colombia</span>
            <br />
            Actualmente estoy buscando trabajo como programador web
            <br />
           
            <br />
            Además de codificar, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ejercicio
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer Libros
            </li>
            <li className="about-activity">
              <ImPointRight /> Compartir en familia
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
