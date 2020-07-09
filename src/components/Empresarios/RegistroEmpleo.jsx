import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { Form, Button, Row, Col } from "react-bootstrap";
import Mapa from "./Mapa";

function RegistroEmpleo() {
  const [formValues, handleInputChange] = useForm({
    titulo: "",
    descripcion: "",
    salario: "",
    contrato: ""
  });
  const { titulo, descripcion, salario, contrato } = formValues;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col md={5} sm={12} xs={12}>
              <Form.Group>
                <Form.Label>Título de la Vacante</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la vacante"
                  name="titulo"
                  value={titulo}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Descripción de la Vacante</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  Descripción de la vacante que estas publicando.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Salario de la Vacante</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Salio de vacante en MXN"
                  name="salario"
                  value={salario}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Tipo de Contrato</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tiempo de contrato"
                  name="contrato"
                  value={contrato}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" size="lg" block>
                Guardar
              </Button>
            </Col>
            <Col md={7} sm={12} xs={12}>
              <Form.Label>Seleccionar Ubicación en el mapa</Form.Label>
              <Mapa />
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}

export default RegistroEmpleo;
