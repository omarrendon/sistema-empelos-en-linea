import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Tabs, IconButton, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Nav.styles";


function Nav() {
  const classes = styles();

  return (
    <div>
      <>
        <AppBar position="fixed" color={"secondary"} className={classes.appBar}>
          <Tabs>
            <IconButton
              color="inherit"
              arial-label="menu"
              className={classes.icon}
            >
              <MenuIcon />
            </IconButton>
            <Hidden only={["sm", "xs"]}>
              <Link to={"/"} className={classes.link}>
                Inicio
              </Link>
              <Link to={"/candidato"} className={classes.link}>
                Candidato
              </Link>
              <Link to={"/empresario"} className={classes.link}>
                Empresario
              </Link>
            </Hidden>
          </Tabs>
        </AppBar>
      </>
    </div>
  );
}

export default Nav
