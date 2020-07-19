import React from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
import PerfilData from './PerfilData';
import PerfilImagen from './PerfilImagen';


function Perfil() {
  return (
    <div className="container p-4">
      <p className="h2">Mi Perfil</p>
      <hr />
      <Row>
        <Col md={8} sm={12} xs={12}>
          <PerfilData />
          
        </Col>
        <Col md={4} sm={12} xs={12}>
          <PerfilImagen />
        </Col>
      </Row>
    </div>
  );
}

export default Perfil
