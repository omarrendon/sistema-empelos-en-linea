import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Typography,Hidden, Button, Divider, Paper } from "@material-ui/core";
import styles from "./index.styles";
// import Logo from "../../Images/job2.jpg";
import Logo from "../../../Images/job2.jpg";

import WorkIcon from "@material-ui/icons/Work";
import AssistantIcon from "@material-ui/icons/Assistant";
import PersonPinIcon from "@material-ui/icons/PersonPin";

function index(props) {
  const classes = styles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <header className={classes.header}>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              class="svg--sm"
              fill="white"
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              class="svg--lg"
              fill="white"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h3" className={classes.titulo}>
                Busca tu empleo ideal desde nuestra plataforma
              </Typography>
              <Typography variant="h6" className={classes.tituloParrafo}>
                Por medio de nuestra plataforma podrás aplicar al empleo que
                siempre has querido, nosotros te ayudamos a contactar con las
                mejores empresas.
              </Typography>
              <Hidden smDown>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.botonRegistro}
                  component={Link}
                  to="/regi5stro-candidato"
                >
                  Registrate
                </Button>
              </Hidden>
            </Grid>
            <Hidden smDown>
              <Grid item md={6}>
                <img src={Logo} alt="logo" className={classes.Image} />
              </Grid>
            </Hidden>
          </Grid>
        </header>
      </Grid>

      <Grid item xs={10} sm={12} md={12}>
        <Divider variant="fullWidth" className={classes.divider} />
      </Grid>

      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" className={classes.vacanteTitulo}>
              {" "}
              Busca tu empleo <WorkIcon />
            </Typography>

            <p className={classes.vacanteParrafo}>
              A traves de nuestra plataforma podrás buscar empleos en distinntas
              partes del mundo, además podrás aplicar a la que mejor oferta que
              se adapte a tus necesidades.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" className={classes.vacanteTitulo}>
              Selecciona la mejor opción <AssistantIcon />{" "}
            </Typography>
            <p className={classes.vacanteParrafo}>
              Encontrarás las ofertas laborales con los salarios más
              competitivos de todo el mercado. Solo tendrás que enviar tu CV a
              la vacante que quieras aplicar.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" className={classes.vacanteTitulo}>
              Aplica a esa vacante <PersonPinIcon />{" "}
            </Typography>
            <p className={classes.vacanteParrafo}>
              Una vez que ya hallas mandado tu CV, el encargado de la
              publicación de la vacante se pondrá en contacto de manera directa
              contigo, por eso es necesario que pongas todos tus datos de
              contacto.
            </p>
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} ms={12} className={classes.footer}>
          <header className={classes.footerHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className={classes.footerSvg}
            >
              <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
          </header>
          <Grid container>
            <Grid xs={12} sm={12} md={12} item>
              <Paper elevation={3} className={classes.footerPaper}>
                <Typography variant="h4">Datos del Proyecto</Typography>
                <ul>
                  <li>
                    <span>
                      <strong>Desarrollador :</strong> Omar Rendón
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Github :</strong> omarrendon
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>email : </strong> omarcr.96@gmail.com
                    </span>
                  </li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default index;
