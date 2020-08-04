import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import PublicacionesMap from "./PublicacionesMap";
import ModalEditarPublicacion from "./ModalEditarPublicacion";
import Pagination from "./Pagination";
import { ToastContainer, toast } from "react-toastify";
import "./Styles/Publicaciones.css";

function Publicaciones() {
  const [data, setData] = useState({ publicaciones: [] });
  const [modalShow, setModalShow] = useState(false);
  const initialFormState = {
    id_publicacion: null,
    autor: "",
    contrato: "",
    descripcion: "",
    fecha_publicacion: "",
    fk_empresario: "",
    latitud: "",
    longitud: "",
    salario: "",
    titulo: ""
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [currentPosition, setCurrentPositon] = useState(null);
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
    setData(response.data);
    setLoading(false);
  };
  console.log(data.publicaciones);

  const handleEdit = item => {
    console.log(item);
    setModalShow(true);
    setCurrentUser({
      id_publicacion: item.id_publicacion,
      autor: item.autor,
      contrato: item.contrato,
      descripcion: item.descripcion,
      fecha_publicacion: item.fecha_publicacion,
      fk_empresario: item.fk_empresario,
      latitud: item.latitud,
      longitud: item.longitud,
      salario: item.salario,
      titulo: item.titulo
    });
  };
  const handleClickLocation = e => {
    setCurrentPositon(e);
  };

  const updateUser = (id_publicacion, updateUser) => {
    setData({
      publicaciones: data.publicaciones.map(user =>
        user.id_publicacion === id_publicacion ? updateUser : user
      )
    });
  };

  const handleDelete = async (id_publicacion) => {
    console.log(id_publicacion);
    toast.error("Publicación eliminada ✔");
    await axios.delete(`http://localhost:4000/api/publicacion/${id_publicacion}`);
    fetchData();
  };

  const deleteToast = () => {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
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

  return (
    <>
      <Row>
        <Col md={12} sm={12} xs={12} className="root">
          <p className="h2 mt-5">Mis Publicaciones</p>
          <hr />
          <Card className="border border-dark mt-3 card-pricipal">
            <PublicacionesMap
              post={currentPosts}
              loading={loading}
              handleClickLocation={handleClickLocation}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data.publicaciones.length}
              paginate={paginate}
            />
          </Card>
          <ModalEditarPublicacion
            show={modalShow}
            onHide={() => setModalShow(false)}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </Col>
        {deleteToast()}
      </Row>
    </>
  );
}

export default Publicaciones;
