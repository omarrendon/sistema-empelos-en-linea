import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Nav";
import Home from "../Landing/Home/index";
import Candidato from "../Candidato/Mapa/Mapa";
import Empresario from "../Empresario/Mapa/Mapa";
// import RegistroEmpresario from "../Empresario/index";
// import Home from "../Home/index";
// import Login from "../Sesion/index";

function Principal() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/candidato" component={Candidato} />
        <Route path="/registro-empresario" component={Empresario} />
        {/* <Route path="/login" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default Principal;
