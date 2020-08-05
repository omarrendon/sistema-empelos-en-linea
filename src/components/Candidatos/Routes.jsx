import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Empleos from './Empleos';
import Ofertas from './Ofertas';
import Perfil from './Perfil';
import Propuestas from './Propuestas'; 

function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Empleos} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/ofertas" component={Ofertas} />
        <Route path="/propuestas" component={Propuestas} />
      </Switch>
    </Router>
  );
}

export default Routes;
