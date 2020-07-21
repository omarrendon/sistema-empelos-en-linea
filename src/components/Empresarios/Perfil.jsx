import React from 'react';
import { Row, Col } from "react-bootstrap";
import PerfilData from './PerfilData';

function Perfil() {
  return (
    <div className="container p-4">
      <p className="h2">Mi Perfil</p>
      <hr />
      <Row>
        <Col md={12} sm={12} xs={12}>
          <PerfilData />
        </Col>
      </Row>
    </div>
  );
}

export default Perfil
