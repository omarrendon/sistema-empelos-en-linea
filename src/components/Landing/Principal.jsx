import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/index";
import RegistroCandidato from "../Candidato/index";
import RegistroEmpresario from "../Empresario/index";
import Home from "../Landing/index";
import Login from "../Sesion/index";

function Principal() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registro-candidato" component={RegistroCandidato} />
        <Route path="/registro-empresario" component={RegistroEmpresario} />
        <Route path="/login" component={Login} />
        {/* <Route path="/candidato" component={Candidato} /> */}
      </Switch>
    </Router>
  );
}

export default Principal
