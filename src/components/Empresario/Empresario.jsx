import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Appbar from './Appbar/Appbar';
import Mapa from './Mapa/Mapa';
import Perfil from './Perfil/Perfil';
import Empleos from './Empleos/Empleos';

function Empresario() {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Mapa} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/empleos" component={Empleos} />
      </Switch>
    </Router>
  );
}

export default Empresario
