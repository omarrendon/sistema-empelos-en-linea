import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import PerfilImagen from "./PerfilImagen";
import Logo from "../../Images/find.jpg";
import ModalEditar from "./ModalEditar";
import "./Styles/PerfilData.css";

function PerfilData() {
  const { loading, data, error } = useFetch("http://localhost:4000/api/empresario/", {});
  const { id_empresario, nombre, apellido_paterno, apellido_materno, email, telefono, contrasenia } = !!data && data[1];
  const user = {id_empresario, nombre, apellido_paterno, apellido_materno, email, telefono, contrasenia};
  const [modalShow, setModalShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState(user);
  
  console.table(data);
  console.log(user);

  const updateUser = (id_empresario, updateUser) => {
    setModalShow(true);
    setEditing(true);
  };

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12} className="perfil ">
          <Card className="border border-primary">
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
                <PerfilImagen URL={Logo} ALT={"FotoPerfil"} />
              </Col>
              <Col md={12} sm={12} xs={12} className="button-perfil m-3">
                <Button
                  variant="success"
                  size="lg"s
                  className="button"
                  // onClick={(() => setModalShow(true))}]
                  onClick={ () => updateUser(user)}
                >
                  Editar Información
                </Button>
                <ModalEditar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  editing={editing}
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