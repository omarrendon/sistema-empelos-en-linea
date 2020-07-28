import React from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import Mapa from "./Mapa";
// import ModalEditarPublicacion from "./ModalEditarPublicacion";

function PublicacionesMap({ post, loading, handleClickLocation, handleEdit }) {
  
  if (loading) {
    return (
      <>
        {" "}
        <h2>Cargando</h2>
        <Spinner animation="border" className="mt-2" />
      </>
    );
  }
  return (
    <>
      {post.map(item => (
        <Card
          className="border border-light m-2 card-element"
          key={item.id_publicacion}
        >
          <Card.Title>
            <p className="card-titulo m-3"> {item.titulo} </p>
          </Card.Title>
          <Card.Body className="card-body">
            <p className="card-objetivo">{item.descripcion}</p>
            <Card.Body className="card-descripcion">
              <Row>
                <Col md={5} sm={6} xs={12}>
                  <label className="card-label">Salario</label>
                  <Card.Text className="card-text">$ {item.salario}</Card.Text>
                  <label className="card-label">Tipo de contrato</label>
                  <Card.Text className="card-text">{item.contrato}</Card.Text>
                  <label className="card-label">Autor de la publicación</label>
                  {/* <Card.Text className="card-text">
                    {item.empresario.nombre} {item.empresario.apellido_paterno}{" "}
                    {item.empresario.apellido_materno}
                  </Card.Text> */}
                  <label className="card-label">Fecha de la publicación</label>
                  <Card.Text className="card-text">
                    {item.fecha_publicacion}
                  </Card.Text>
                </Col>
                <Col md={7} sm={6} xs={12}>
                  <label className="card-label">
                    Ubicación actual del empleo
                  </label>
                  <Mapa
                    validateMap={true}
                    mapaPosition={[item.latitud, item.longitud]}
                    currentPosition={handleClickLocation}
                  />
                </Col>
                <Col md={12} sm={12} xs={12} className="card-botones">
                  <Button variant="danger" className="boton mt-4 mr-4">
                    Eliminar
                  </Button>
                  <Button
                    variant="success"
                    className="boton mt-4 mr-4"
                    onClick={() => {handleEdit(item)}}
                    // onClick={() => handleEdit(item)}
                  >
                    Editar
                  </Button>
                </Col>
              </Row>
            </Card.Body>
            <hr className="border border-dark" />
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default PublicacionesMap;
