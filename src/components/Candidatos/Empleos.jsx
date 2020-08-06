import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import EmpleosMap from "./EmpleosMap";

function Empleos() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(info);
  }, [info]);

  const handleClickLocation = e => {
    setCurrentPosition(e);
    console.log(currentPosition);
  };

  const infoPublicacion = e => {
    setInfo(e);
  };

  return (
    <>
      <Col md={12} sm={12} xs={12}>
        filtos de busqueda
        <br />
        <hr />
      </Col>

      <Col md={12} sm={12} xs={12}>
        <EmpleosMap
          currentPosition={handleClickLocation}
          infoPublicacion={infoPublicacion}
        />
      </Col>

      <Col md={12} sm={12} xs={12}>
        <br />
        <hr />
        publicación
        <br />
        <pre>{JSON.stringify(info, null, 2)}</pre>       
      </Col>
    </>
  );
}

export default Empleos;
