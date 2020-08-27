import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import PerfilImagen from "../PerfilImagen";
import Logo from "../../Images/find.jpg";
import ModalEditarPerfil from "./ModalEditarPerfil";
import "./Styles/PerfilData.css";

function PerfilData() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const {
    id_candidato,
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    telefono,
    contrasenia
  } = data;
  const user = {
    id_candidato,
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    telefono,
    contrasenia
  };
  const [dataUser, setDataUser] = useState(user);

  console.table(user);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/empresario/");
    setData(response.data.data[0]);
  };

  console.log(dataUser);
  const updateUser = () => {
    setModalShow(true);
  };

  const handleUpdateData = e => {
    fetchData();
  };

  return (
    <div className="container p-4">
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
                <PerfilImagen url={Logo} alt={"FotoPerfil"} />
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
                  updateData={handleUpdateData}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PerfilData;
