import React from 'react';
import { BrowserRouter as Router, Switch, } from "react-router-dom";
// import Appbar from './Appbar';
import Mapa from './Mapa/Mapa';

function Empresario() {
  return (
    <Router>
      <Mapa />
      <Switch>
        {/* <Route exact path="/" component={Mapa} /> */}
      </Switch>
    </Router>
  );
}

export default Empresario
