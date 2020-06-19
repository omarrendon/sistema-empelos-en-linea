import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

function Listas() {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>

      <ListItem button component={Link} to="/login">
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary="Iniciar Sesión" />
      </ListItem>

      <ListItem button component={Link} to="/registro-candidato">
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Registrarse como candidato" />
      </ListItem>

      <ListItem button component={Link} to="/registro-empresario">
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="Registrarse como empresario" />
      </ListItem>

      <Divider variant="middle" />

      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar Sesión" />
      </ListItem>
    </List>
  );
}

export default Listas;
