import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './Navigation';
import RegistroEmpleo from './RegistroEmpleo';
import Perfil from './PerfilData';
import Publicaciones from './Publicaciones';
import Propuestas from './Propuestas';

function Routes() {
  return ( 
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/empresario" component={RegistroEmpleo} />
        <Route path="/empresario-perfil" component={Perfil} />
        <Route path="/empresario-publicaciones" component={Publicaciones} />
        <Route path="/empresario-propuestas" component={Propuestas} />
      </Switch>
    </Router>
  );
}

export default Routes
