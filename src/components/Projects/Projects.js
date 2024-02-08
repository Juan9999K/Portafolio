import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Trabajos <strong className="purple">Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Desarrollo web"
              description="En constante mejora dia a dia para ir mejorando los conocimientos "
              ghLink="https://juan9999k.github.io/Desarrollo-web/"
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
