import React from "react";

// import Principal from "../src/components/Landing/Home/Principal";
// import Candidato from "../src/components/Candidato/Candidato";
// import Empresario from "../src/components/Empresario/Empresario";
import Empresarios from '../src/components/Empresarios/Routes';

import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from './components/Navgeneral/Nav';
// import { Paper, Grid, Typography } from "@material-ui/core";
// import styles from './App.styles';
// import { useState } from "react";

function App() {
  // const classes = styles();
  // const [inicio, setInicio] = useState(false);
  // const [candidato, setCandidato] = useState(false);
  // const [empresario, setEmpresario] = useState(false);

  // const handleInicio = () => {
  //   setInicio(true);
  //   setCandidato(false);
  //   setEmpresario(false);
  // };
  
  // const handleCandidato = () => {
  //   setInicio(false);
  //   setCandidato(true);
  //   setEmpresario(false);
  // };

  // const handleEmpresario = () => {
  //   setInicio(false);
  //   setCandidato(false);
  //   setEmpresario(true);
  // };

  return (
    <>
      {/* <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} className={classes.grid}>
          <Paper elevation={3} className={classes.paper} onClick={handleInicio}>
            <Typography variant="h4" className={classes.titulo}>
              Inicio
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.grid}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={handleCandidato}
          >
            <Typography variant="h4" className={classes.titulo}>
              Candidato
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.grid} s>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={handleEmpresario}
          >
            <Typography variant="h4" className={classes.titulo}>
              Empresario
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {inicio ? <Principal /> : <> </>}
      {candidato ? <Candidato /> : <> </>}
      {empresario ? <Empresario /> : <> </>} */}
          
      <Empresarios/>
      {/* <Principal/>
      <Candidato /> */}
    </>
  );
}

export default App;
