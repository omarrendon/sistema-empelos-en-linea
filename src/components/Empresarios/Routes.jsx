import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navigation from './Navigation';
import Index from './Index';

function Routes() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={Index}/>
      </Switch>
    </Router>
  );
}

export default Routes
