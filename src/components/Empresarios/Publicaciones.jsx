import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import PublicacionesMap from "./PublicacionesMap";
import ModalEditarPublicacion from "./ModalEditarPublicacion";
import Pagination from "./Pagination";
import "./Styles/Publicaciones.css";

function Publicaciones() {
  const [data, setData] = useState({ publicaciones: [] });
  const [currentPosition, setCurrentPositon] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://localhost:4000/api/publicacion/",
      {}
    );
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  };

  const handleEdit = item => {
    console.log(item);
    setModalShow(true);
  };

  const handleClickLocation = e => {
    setCurrentPositon(e);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.publicaciones.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  // const prevPage = () => this.setState({ paginaActual: paginaActual - 1 });

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12} className="root">
          <p className="h2 mt-5">Mis Publicaciones</p>
          <Card className="border border-primary mt-3 card-pricipal">
            <PublicacionesMap
              post={currentPosts}
              loading={loading}
              handleClickLocation={handleClickLocation}
              handleEdit={handleEdit}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data.publicaciones.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </Card>
          {/* <Card className="border border-primary mt-3 card-pricipal">
            {data.map(item => (
              <Card
                className="border border-light m-2 card-element"
                key={item.id_publicacion}
              >
                <Card.Title>
                  <p className="card-titulo m-3"> {item.titulo} </p>
                </Card.Title>
                <Card.Body className="card-body">
                  <p className="card-objetivo">{item.descripcion}</p>
                  <Card.Body className="card-descripcion">
                    <Row>
                      <Col md={5} sm={6} xs={12}>
                        <label className="card-label">Salario</label>
                        <Card.Text className="card-text">
                          $ {item.salario}
                        </Card.Text>
                        <label className="card-label">Tipo de contrato</label>
                        <Card.Text className="card-text">
                          {item.contrato}
                        </Card.Text>
                        <label className="card-label">
                          Autor de la publicación
                        </label>
                        <Card.Text className="card-text">
                          {item.empresario.nombre}{" "}
                          {item.empresario.apellido_paterno}{" "}
                          {item.empresario.apellido_materno}
                        </Card.Text>
                        <label className="card-label">
                          Fecha de la publicación
                        </label>
                        <Card.Text className="card-text">
                          {item.fecha_publicacion}
                        </Card.Text>
                      </Col>
                      <Col md={7} sm={6} xs={12}>
                        <label className="card-label">
                          Ubicación actual del empleo
                        </label>
                        <Mapa
                          validateMap={true}
                          mapaPosition={[item.latitud, item.longitud]}
                          currentPosition={handleClickLocation}
                        />
                      </Col>
                      <Col md={12} sm={12} xs={12} className="card-botones">
                        <Button variant="danger" className="boton mt-4 mr-4">
                          Eliminar
                        </Button>
                        <Button
                          variant="success"
                          className="boton mt-4 mr-4"
                          onClick={() => handleEdit(item)}
                        >
                          Editar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                  <hr className="border border-dark" />
                </Card.Body>
              </Card>
            ))}
          </Card> */}
          <ModalEditarPublicacion
            show={modalShow}
            onHide={() => setModalShow(false)}
            // user={item}
          />
        </Col>
      </Row>
    </>
  );
}

export default Publicaciones;
