import React, { useState } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import PerfilImagen from "../PerfilImagen";
import Logo from "../../Images/find.jpg";
import PerfilModal from './PerfilModal';
import "./Styles/Perfil.css";

function Perfil() {
  const [modalShow, setModalShow] = useState(false);

  const updateUser = () => {
    setModalShow(true);
    console.log(modalShow);
  };
  return (
    <>
      <Col md={12} sm={12} xs={12} className="perfil-titulo">
        <p className="h3">Mi Perfil</p>
        <hr />
      </Col>
      <Col md={12} sm={12} xs={12} className="">
        <Card className="border border-dark perfil-contenido">
          <Row>
            <Col md={6} sm={12} xs={12} className="perfil-data2">
              <PerfilImagen url={Logo} alt={"FotoPerfil"} />
            </Col>
            <Col md={6} sm={12} xs={12} className="perfil-data1">
              <label className="datos-perfil  ">Nombre</label>
              <p className="data-perfil ">NOMBRE DE LA PERSONA</p>
              <label className="datos-perfil ">Correo Eléctronico</label>
              <p className="data-perfil ">CORREO ELECTRONICO</p>
              <label className="datos-perfil  ">Telefono</label>
              <p className="data-perfil ">TELEFONO DE LA PERSONA</p>
              <label className="datos-perfil  ">Contraseña</label>
              <p className="data-perfil ">CONTRASEÑA DE LA PERSONA</p>
            </Col>
            <Col md={12} sm={12} xs={12} className="perfil-boton">
              <Button size="lg" className="button" onClick={() => updateUser()}>
                Editar Información
              </Button>
              <PerfilModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                // user={user}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default Perfil;
