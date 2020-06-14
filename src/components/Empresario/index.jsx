import React from "react";
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container,  } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from './index.styles'

export default function SignUp() {
  const classes = styles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.titulo}>
          Rgistrate para publicar tus primeras vacantes
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <TextField
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre(s)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                variant="outlined"
                fullWidth
                required
                id="apellidoPaterno"
                label="Apellido Paterno"
                name="apellidoPaterno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="apellidoMaterno"
                label="Apellido Materno"
                name="apellidoMaterno"
                autoComplete="apellidoMaterno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="empresa"
                label="Empresa a la que pertenece"
                name="empresa"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrate
          </Button>
        </form>
      </div>
    </Container>
  );
}
