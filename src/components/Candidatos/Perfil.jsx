import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import PerfilImagen from "../PerfilImagen";
import Logo from "../../Images/find.jpg";
import PerfilModal from "./PerfilModal";
import axios from "axios";
import "./Styles/Perfil.css";

function Perfil() {
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
    const response = await axios.get("http://localhost:4000/api/candidato/");
    setData(response.data.data[0]);
  };

  const updateUser = () => {
    setModalShow(true);
  };

  const handleUpdateData = (e) => {
    fetchData();
  }

  return (
    <>
      <Col md={12} sm={12} xs={12} className="perfil-titulo">
        <p className="h3">Mi Perfil</p>
        <hr />
      </Col>
      <Col md={12} sm={12} xs={12} className="mb-4">
        <Card className="border border-dark perfil-contenido">
          <Row>
            <Col md={6} sm={12} xs={12} className="perfil-data2">
              <PerfilImagen url={Logo} alt={"FotoPerfil"} />
            </Col>
            <Col md={6} sm={12} xs={12} className="perfil-data1">
              <label className="datos-perfil  ">Nombre</label>
              <p className="data-perfil ">
                {nombre} {apellido_paterno} {apellido_materno}
              </p>
              <label className="datos-perfil ">Correo Eléctronico</label>
              <p className="data-perfil ">{email}</p>
              <label className="datos-perfil  ">Telefono</label>
              <p className="data-perfil ">{telefono}</p>
              <label className="datos-perfil  ">Contraseña</label>
              <p className="data-perfil ">{contrasenia}</p>
            </Col>
            <Col md={12} sm={12} xs={12} className="perfil-boton">
              <Button size="lg" className="button" onClick={() => updateUser()}>
                Editar Información
              </Button>
              <PerfilModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                user={user}
                updateData={handleUpdateData}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default Perfil;
