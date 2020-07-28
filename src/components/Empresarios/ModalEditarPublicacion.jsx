import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

function ModalEditarPublicacion(props) {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(user.id_publicacion, user);
    console.log("CAMBIOS GUARDADOS");
    console.log(user);
  };

  const handleInputChange = (event) => {
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
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="autor"
                value={user.autor}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="success"
              size="lg"
              className="mt-5 ml-5"
            >
              Guardar
            </Button>
          </Form>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditarPublicacion;
