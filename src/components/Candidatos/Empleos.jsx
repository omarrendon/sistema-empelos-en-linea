import React, { useState, useEffect } from "react";
import {  Col } from "react-bootstrap";
import EmpleosMap from "./EmpleosMap";
import "./Styles/Empleos.css";
import DragnDrop from "./DragnDrop";

function Empleos() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(info);
  }, [info]);

  const handleClickLocation = e => {
    setCurrentPosition(e);
    console.log(currentPosition);
  };

  const infoPublicacion = e => {
    setInfo(e);
    setLoading(true);
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

      <hr />
      <Col md={12} sm={12} xs={12} className="detalles">
        <Col md={12} sm={12} xs={12} className="detalles-datos">
          {loading ? (
            <>
              <Col md={12} sm={12} xs={12} className="detalles">
                <br />
                <p className="h3">Detalles de la información</p>
              </Col>
              <Col md={6} sm={12} xs={12} className="detalles-datos-1">
                <label className="detalles-label">Titulo de la vacante</label>
                <p className="detalles-parrafo">{info.titulo}</p>
                <label className="detalles-label">
                  Descripción de la vacante
                </label>
                <p className="detalles-parrafo">{info.descripcion}</p>
                <label className="detalles-label">Fecha de publicación</label>
                <p className="detalles-parrafo">{info.fecha_publicacion}</p>
                <label className="detalles-label">Autor</label>
                <p className="detalles-parrafo">{info.autor}</p>
                <label className="detalles-label">Salario</label>
                <p className="detalles-parrafo">${info.salario}</p>
              </Col>
              <Col md={6} sm={12} xs={12} className="detalles-datos-2">
                <label className="detalles-label">Tipo de contrato</label>
                <p className="detalles-parrafo">{info.contrato}</p>
                <label className="detalles-label">
                  Nombre de la persona que publica la vacante
                </label>
                <p className="detalles-parrafo">
                  {info.empresario.nombre} {info.empresario.apellido_paterno}{" "}
                  {info.empresario.apellido_materno}
                </p>{" "}
                {/* <p className="detalles-parrafo">
                  {info.empresario.apellido_paterno}
                </p>{" "}
                <p className="detalles-parrafo">
                  {info.empresario.apellido_materno}
                </p> */}
                <label className="detalles-label">Email de contacto</label>
                <p className="detalles-parrafo">{info.empresario.email}</p>
                <label className="detalles-label">Insertar CV.</label>
                <div >
                  <DragnDrop />
                </div>
              </Col>
            </>
          ) : (
            <p className="h3 text-center">Selecciona una vacante...</p>
          )}
        </Col>
      </Col>
    </>
  );
}

export default Empleos;
