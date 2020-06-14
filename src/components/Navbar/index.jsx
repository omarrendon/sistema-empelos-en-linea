import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {AppBar, Tabs} from '@material-ui/core';
import Candidato from '../Candidato/index';
import Empresario from '../Empresario/index';
import Home from '../Landing/index';
import Login from '../Sesion/index';
import styles from './index.style';

function index() {
  const classes = styles();

  return (
    <Router>
      <AppBar position="static" color={"secondary"} >
        <Tabs >
          <Link to={"/"} className={classes.link}>
            Inicio
          </Link>
          <Link to={"/login"} className={classes.link}>
            Iniciar Sesión
          </Link>
          <Link to={"/login-candidato"} className={classes.link}>
            Registrarme como candidado
          </Link>
          <Link to={"/login-empresario"} className={classes.link}>
            Registrarme como empresario
          </Link>
          <Link to={"/11"} className={classes.close}>Cerrar Sesión</Link>
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login-candidato" component={Candidato} />
        <Route path="/login-empresario" component={Empresario} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default index
