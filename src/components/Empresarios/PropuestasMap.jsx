import React from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";

function PropuestasMap({ post, loading }) {
  if (loading) {
    return (
      <>
        <h2>Cargando</h2>
        <Spinner animation="border" className="mt-2" />
      </>
    );
  }
  return (
    <ul>
      {post.map(propuesta => (
        <Card
          className="border border-light card-element"
          key={propuesta.id_candidatoxpublicacion}
        >
          <Card.Title>
            <p className="card-titulo m-3">{propuesta.cxpPublicacion.titulo}</p>
          </Card.Title>
          <Card.Body className="card-body">
            <Row>
              <Col md={7} sm={6} xs={12}>
                <p className="h3 card-objetivo">Datos de postulante</p>
                <label className="card-label">Nombre</label>
                <Card.Text className="card-text">
                  {propuesta.cxpCandidato.nombre}{" "}
                  {propuesta.cxpCandidato.apellido_paterno}{" "}
                  {propuesta.cxpCandidato.apellido_materno}{" "}
                </Card.Text>
                <label className="card-label">Correo Electrónico</label>
                <Card.Text className="card-text">{propuesta.cxpCandidato.email}</Card.Text>
                <label className="card-label">Teléfono</label>
                <Card.Text className="card-text">{propuesta.cxpCandidato.telefono}</Card.Text>
                <label className="card-label">Avatar</label>
                <Card.Text className="card-text">{propuesta.cxpCandidato.avatar}</Card.Text>
              </Col>
              <Col md={5} sm={6} xs={12}>
                <p className="h3 card-objetivo">Datos de la vacante</p>
                <label className="card-label">Título</label>
                <Card.Text className="card-text">{propuesta.cxpPublicacion.titulo}</Card.Text>
                <label className="card-label">Descripción</label>
                <Card.Text className="card-text">{propuesta.cxpPublicacion.descripcion}</Card.Text>
                <label className="card-label">Fecha de Publicación</label>
                <Card.Text className="card-text">
                  {propuesta.cxpPublicacion.fecha_publicacion}
                </Card.Text>
                <label className="card-label">Contrato</label>
                <Card.Text className="card-text">{propuesta.cxpPublicacion.contrato}</Card.Text>
                <label className="card-label">Salario</label>
                <Card.Text className="card-text">{propuesta.cxpPublicacion.salario}</Card.Text>
              </Col>
            </Row>

            <hr className="border border-dark" />
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}

export default PropuestasMap;
