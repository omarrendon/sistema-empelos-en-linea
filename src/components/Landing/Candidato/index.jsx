import React from 'react'
import { Avatar, Button, CssBaseline, TextField, Paper,  Grid, Typography } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import styles from './index.styles'

export default function SignInSide() {
  const classes = styles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Únete a nosotros
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre(s)"
              name="nombre"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="apellidoPaterno"
              label="Apellido Paterno"
              name="apellidoPaterno"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="apellidoMaterno"
              label="Apellido Materno"
              name="apellidoMaterno"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Eléctronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Registrarse
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}