import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import PerfilImagen from "../PerfilImagen";
import Logo from "../../Images/find.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/Toast.css";


function ModalEditarPerfil(props) {
  const [user, setUser] = useState(props.user);
  const { id_empresario } = user;
  const [showToastSuccess, setShowToastSuccesss] = useState(null);

  useEffect(() => {
    setUser(props.user);
    console.log(user);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    const {
      nombre,  
      apellido_paterno,
      apellido_materno,
      email,
      telefono,
      contrasenia
    } = user;
    const data = {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      telefono,
      contrasenia
    };
    event.preventDefault();
    console.log("ENVIADOS");
    console.log(user);
    await axios.put(`http://localhost:4000/api/empresario/${id_empresario}`, data);
    
    setShowToastSuccesss(true);
    toast.success("Se guardaron los cambios exitosamente ✔", {
      className: "toast-success"
    });

    props.updateData();
  };

  const successToast = () => {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // className="toast-succes"
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
      {showToastSuccess && successToast()}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar información del usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col md={6} sm={12} xs={12} className="pl-4 ">
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
                    name="contrasenia"
                    value={user.contrasenia}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12} xs={12} className="pl-5">
                <PerfilImagen url={Logo} alt={"FotoPerfil"} width={350} />
                <Button
                  type="submit"
                  // onClick={props.onHide}
                  variant="success"
                  size="lg"
                  className="mt-5 ml-5"
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

export default ModalEditarPerfil;
