import React from "react";
import {
  TextField,
  Card,
  Typography,
  Grid,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import Styles from "./Perfil.style";

function Perfil() {
  const classes = Styles();

  return (
    <Grid container xs={12} sm={12} md={12}>
      <Grid item xs={12} sm={12} md={12} className={classes.titulo}>
        <Typography variant="h3">Mi Perfil</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={classes.caja}>
        <Card className={classes.root} variant="outlined">
          <Grid item xs={12} sm={12} md={12}>
            <CardContent>
              <TextField
                name="nombre"
                id="nombre"
                label="Nombre(s)"
                autoFocus
                className={classes.textField}
              />
              <TextField
                id="apellidoPaterno"
                label="Apellido Paterno"
                className={classes.textField}
                name="apellidoPaterno"
              />
              <TextField
                id="apellidoMaterno"
                label="Apellido Materno"
                className={classes.textField}
                name="apellidoMaterno"
              />

              <TextField
                id="email"
                label="Correo Eléctronico"
                className={classes.textField}
                name="email"
              />
              <TextField
                id="telefono"
                label="Telefono Celular"
                className={classes.textField}
                name="telefono"
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" className={classes.buton}>
                Editar Informacion
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Perfil;
