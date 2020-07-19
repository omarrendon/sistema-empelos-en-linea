import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './Navigation';
import RegistroEmpleo from './RegistroEmpleo';
import Perfil from './Perfil';
import Publicaciones from './Publicaciones';
import Propuestas from './Propuestas';

function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={RegistroEmpleo} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/publicaciones" component={Publicaciones} />
        <Route path="/propuestas" component={Propuestas} />
      </Switch>
    </Router>
  );
}

export default Routes
