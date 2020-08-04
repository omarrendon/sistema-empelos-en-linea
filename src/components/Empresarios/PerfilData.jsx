import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import PerfilImagen from "./PerfilImagen";
import Logo from "../../Images/find.jpg";
import ModalEditarPerfil from "./ModalEditarPerfil";
import axios from "axios";
import "./Styles/PerfilData.css";

function PerfilData() {
  const { data } = useFetch("http://localhost:4000/api/empresario/", {});
  console.log(data);
  const { id_empresario, nombre, apellido_paterno, apellido_materno, email, telefono, contrasenia } = !!data && data[2];
  const user = {id_empresario, nombre, apellido_paterno, apellido_materno, email, telefono, contrasenia};
  const [modalShow, setModalShow] = useState(false);
  const [dataUser, setDataUser] = useState(user);
  
  console.table(user);
  
  useEffect( () => {
    setDataUser(user);
    console.log(nombre);
  }, [data]);
  
  console.log(dataUser);
  const updateUser = () => {
    setModalShow(true);

  };

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12} className="perfil ">
          <Card className="border border-dark">
            <p className="text-center titulo-perfil">Datos de usuario</p>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <label className="datos-perfil ml-5 mt-1 pl-5 text-primary">
                  Nombre
                </label>
                <p className="data-perfil ml-5 pl-5">
                  {nombre + " " + apellido_paterno + " " + apellido_materno}
                </p>
                <label className="datos-perfil ml-5 pl-5 text-primary">
                  Correo Eléctronico
                </label>
                <p className="data-perfil ml-5 pl-5">{email}</p>
                <label className="datos-perfil ml-5 pl-5 text-primary">
                  Telefono
                </label>
                <p className="data-perfil ml-5 pl-5">{telefono}</p>
                <label className="datos-perfil ml-5 pl-5 text-primary">
                  Contraseña
                </label>
                <p className="data-perfil ml-5 pl-5">{contrasenia}</p>
              </Col>
              <Col md={6} sm={12} xs={12} className="imagen-perfil">
                <PerfilImagen url={Logo} alt={"FotoPerfil"} width={450} />
              </Col>
              <Col md={12} sm={12} xs={12} className="button-perfil m-3">
                <Button
                  variant="primary"
                  size="lg"
                  s
                  className="button"
                  onClick={() => updateUser(user)}
                >
                  Editar Información
                </Button>
                <ModalEditarPerfil
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  user={user}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PerfilData;