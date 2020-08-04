import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import Mapa from "./Mapa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Styles/ModalEditarPublicacion.css";

function ModalEditarPublicacion(props) {
  const [user, setUser] = useState(props.currentUser);
  const [currentPosition, setCurrentPositon] = useState(null);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleSubmit = async event => {
    event.preventDefault();
    props.updateUser(user.id_publicacion, user);

    const fecha_publicacion = Date.now();
    const { titulo, descripcion, salario, contrato, id_publicacion } = user;

    try {
      if (currentPosition) {
        const { lat, lng } = currentPosition;
        const data = {
          id_publicacion,
          autor: "Omar Rendón",
          descripcion,
          titulo,
          fecha_publicacion,
          salario,
          contrato,
          latitud: lat,
          longitud: lng,
          fk_empresario: 1
        };

        await axios.put(
          `http://localhost:4000/api/publicacion/${id_publicacion}`,
          data
        );
        toast.success("Publicación guardada exitosamente ✔", {
          className: "toast-success"
        });
      } else {
        await axios.put(
          `http://localhost:4000/api/publicacion/${id_publicacion}`,
          user
        );
        toast.success("Publicación guardada exitosamente ✔", {
          className: "toast-success"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickLocation = e => {
    setCurrentPositon(e);
  };

  const successToast = () => {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
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
          Editar información de la publicación
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="root">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col md={4} sm={12} xs={12} className="formulario">
                <Form.Group className="inputForm">
                  <Form.Label>Titulo del trabajo</Form.Label>
                  <Form.Control
                    type="text"
                    name="titulo"
                    value={user.titulo}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="inputForm">
                  <Form.Label>Descripción del trabajo</Form.Label>
                  <Form.Control
                    type="text"
                    name="descripcion"
                    value={user.descripcion}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="inputForm">
                  <Form.Label>Salario</Form.Label>
                  <Form.Control
                    type="number"
                    name="salario"
                    value={user.salario}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="inputForm">
                  <Form.Label>Tipo de contrato</Form.Label>
                  <Form.Control
                    type="text"
                    name="contrato"
                    value={user.contrato}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={8} sm={12} xs={12} className="mapa">
                <Mapa currentPosition={handleClickLocation} />
              </Col>
              <Col md={12} sm={12} xs={12} className="button">
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="mt-2 boton-guardar"
                >
                  Guardar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEditarPublicacion;
