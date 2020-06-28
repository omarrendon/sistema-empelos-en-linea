import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, IconButton, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Appbar.style";
import Cajon from "./Cajon";

function Appbar() {
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
            <Link to={"/perfil"} className={classes.link}>
              Mi Perfil
            </Link>
            <Link to={"/empleos"} className={classes.link}>
              Mis Empleos
            </Link>
            {/* <Link to={"/propuestas"} className={classes.link}>
              Mis propuestas
            </Link> */}
            <Link to={"/"} className={classes.close}>
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

export default Appbar;
