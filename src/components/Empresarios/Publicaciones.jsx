import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Styles/Publicaciones.css";

function Publicaciones() {
  const [data, setData] = useState({ publicaciones: [] });

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/publicacion/",
      {}
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12} className="root">
          <p className="h2 mt-5">Mis Publicaciones</p>
          <Card className="border border-primary mt-3 card-pricipal">
            {data.publicaciones.map(item => (
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
                      <Col md={6} sm={6} xs={12}>
                        <label className="card-label">Salario</label>
                        <Card.Text>{item.salario}</Card.Text>
                        <label className="card-label">Tipo de contrato</label>
                        <Card.Text>{item.contrato}</Card.Text>
                      </Col>
                      <Col md={6} sm={6} xs={12}>
                        <label className="card-label">
                          Autor de la publicación
                        </label>
                        <Card.Text>
                          {item.empresario.nombre}{" "}
                          {item.empresario.apellido_paterno}{" "}
                          {item.empresario.apellido_materno}
                        </Card.Text>
                        <label className="card-label">
                          Fecha de la publicación
                        </label>
                        <Card.Text>{item.fecha_publicacion}</Card.Text>
                      </Col>
                      <Col md={12} sm={12} xs={12} className="card-botones">
                        <Button variant="danger" className="boton mt-4 mr-3">
                          Eliminar
                        </Button>
                        <Button variant="success" className="boton mt-4 mr-3">
                          Editar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                  <hr className="border border-dark" />
                </Card.Body>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Publicaciones;
