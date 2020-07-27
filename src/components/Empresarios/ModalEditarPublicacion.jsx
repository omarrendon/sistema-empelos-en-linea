import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

function ModalEditarPublicacion(props) {
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    console.log(props.user);
  }, [props]);
  
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
         
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditarPublicacion;
