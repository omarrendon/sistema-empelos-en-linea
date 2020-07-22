import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";

import PerfilImagen from "./PerfilImagen";
import Logo from "../../Images/find.jpg";

function ModalEditar(props) {
  const [user, setUser] = useState(props.user);
  const [editing, setEditing] = useState(props.editing);

  useEffect(() => {
    setUser(props.user);
    console.log(user);
    setEditing(props.editing);
    console.log(editing);
  }, [props]);
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar información del usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <form
              onSubmit={event => {
                event.preventDefault();

                props.updateUser(user.id_empresario, user);
              }}
            >
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={user.nombre}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido_paterno"
                  value={user.apellido_paterno}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido_materno"
                  value={user.apellido_materno}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={user.telefono}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  name="constrasenia"
                  value={user.contrasenia}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </form>
          </Col>
          <Col md={6} sm={12} xs={12} className="imagen-perfil">
            <PerfilImagen URL={Logo} ALT={"FotoPerfil"} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="success" size="lg" block>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
