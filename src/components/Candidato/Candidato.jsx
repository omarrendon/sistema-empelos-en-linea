import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appbar from './Appbar';
import Mapa from './Mapa/Mapa';
import Perfil from './Perfil/Perfil';
import Empleos from './Empleos/Empleos';

function Candidato() {
  
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Mapa} />
        <Route path="/empleos" component={Empleos} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default Candidato
