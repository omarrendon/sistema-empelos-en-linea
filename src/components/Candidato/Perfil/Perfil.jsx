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
    <Grid container>
      <Grid item xs={12} sm={12} md={12} className={classes.titulo}>
        <Typography variant="h3">Mi Perfil</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={classes.caja}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <TextField
              name="nombre"
              variant="outlined"
              required
              fullWidth
              id="nombre"
              label="Nombre(s)"
              autoFocus
              className={classes.textField}
            />

            <TextField
              variant="outlined"
              fullWidth
              required
              id="apellidoPaterno"
              label="Apellido Paterno"
              className={classes.textField}
              name="apellidoPaterno"
            />
            <TextField
              name="nombre"
              variant="outlined"
              required
              fullWidth
              id="nombre"
              label="Nombre(s)"
              className={classes.textField}
              autoFocus
            />

            <TextField
              variant="outlined"
              fullWidth
              required
              id="apellidoPaterno"
              label="Apellido Paterno"
              className={classes.textField}
              name="apellidoPaterno"
            />
          </CardContent>
          <CardActions>
            <Button size="small">Editar</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Perfil;
