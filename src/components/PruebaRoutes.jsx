import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrubaMenu } from "./PrubaMenu";
import RoutesEmpresarios from "./Empresarios/Routes";
import RoutesCandidatos from "./Candidatos/Routes";

export const PruebaRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PrubaMenu} />
          <Route exact path="/empresario" component={RoutesEmpresarios} />
          <Route exact path="/candidato" component={RoutesCandidatos} />
        </Switch>
      </div>
    </Router>
  );
};
