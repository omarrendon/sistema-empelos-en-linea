import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to={"/"}>Panel de Empresarios</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to={"/perfil"}>Mi Perfil</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/publicaciones"}>Mis Publicaciones</Link>{" "}
          </Nav.Link>
          <Nav.Link>
            <Link to={"/propuestas"}>Mis Propuestas</Link>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="#deets">Cerrar Sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation
