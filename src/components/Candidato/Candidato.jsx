import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appbar from './Appbar';
import Mapa from './Mapa';

function Candidato() {
  
  return (
    <Router>
      <Appbar />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/registro-candidato" component={RegistroCandidato} />
        <Route path="/registro-empresario" component={RegistroEmpresario} />
        <Route path="/login" component={Login} /> */}
        <Route exact path="/" component={Mapa} />
      </Switch>
    </Router>
  );
}

export default Candidato
