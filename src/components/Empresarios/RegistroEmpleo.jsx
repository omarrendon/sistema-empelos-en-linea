import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { Form, Button, Row, Col } from "react-bootstrap";
import Mapa from "../Mapa";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import "./Styles/RegistroEmpleo.css";


function RegistroEmpleo() {
  const [formValues, handleInputChange] = useForm({
    titulo: "",
    descripcion: "",
    salario: "",
    contrato: ""
  });
  const { titulo, descripcion, salario, contrato } = formValues;
  const [showToastSuccess, setShowToastSuccesss] = useState(null);
  const [showToastError, setShowToastError] = useState(null);
  const [currentPosition, setCurrentPositon] = useState(null);

  const handleClickLocation = e => {
    console.log(e);
    setCurrentPositon(e);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { titulo, descripcion, salario, contrato } = formValues;
    const fecha_publicacion = Date.now();
    if (titulo === "" || descripcion === "" || salario === "" || contrato === "" || !currentPosition) {
      
      setShowToastError(true);
      toast.error(
        "Revisar los campos faltantes o establecer la ubicación en el mapa de manera correcta ❌"
      );
    } else { 
      if (currentPosition) {
        const { lat, lng } = currentPosition;
        const data = {
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
        axios.post("http://localhost:4000/api/publicacion/", data);
        console.log(data);
        setShowToastSuccesss(true);
        toast.success("Publicación creada exitosamente ✔", {
          className: "toast-success"
        });
      }
    }
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
      />
    );
  };

  const errorToast = () => {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
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
    <div className="container p-4">
      <p className="h2">Publicar nueva oferta de tabajo</p>
      {showToastSuccess && successToast()}
      {showToastError && errorToast()}
      <hr />
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
              </Col>
              <Col md={7} sm={12} xs={12}>
                <Form.Label>Buscar la ubicación en el mapa</Form.Label>
                <Mapa
                  currentPosition={handleClickLocation}
                  validateMap={false}
                />
              </Col>
              <Col md={12} sm={12} xs={12} className="boton">
                <Button
                  variant="success"
                  type="submit"
                  size="lg"
                  className=" botonSubmit"
                >
                  Guardar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default RegistroEmpleo;
