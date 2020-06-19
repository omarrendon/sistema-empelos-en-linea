import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, IconButton, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./index.style";
import Cajon from "./Cajon";

function Index() {
  const classes = styles();
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <>
      <AppBar position="fixed" color={"secondary"} className={classes.appBar}>
        <Tabs>
          <IconButton
            color="inherit"
            arial-label="menu"
            className={classes.icon}
            onClick={() => accionAbrir()}
          >
            .
            <MenuIcon />
          </IconButton>
          <Hidden only={["sm", "xs"]}>
            <Link to={"/"} className={classes.link}>
              Inicio
            </Link>
            <Link to={"/login"} className={classes.link}>
              Iniciar Sesión
            </Link>
            <Link to={"/registro-candidato"} className={classes.link}>
              Registrarme como candidado
            </Link>
            <Link to={"/registro-empresario"} className={classes.link}>
              Registrarme como empresario
            </Link>
            <Link to={"/candidato"} className={classes.close}>
              Cerrar Sesión
            </Link>
          </Hidden>
        </Tabs>
      </AppBar>
      <Hidden lgDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden mdUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
    </>
  );
}

export default Index;
