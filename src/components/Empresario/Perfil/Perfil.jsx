import React, { useState, useEffect } from "react";
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
import axios from "axios";

function Perfil() {
  const classes = Styles();
  const [admin, setAdmin] = useState({ empresarios: [] });
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    email: "",
    telefono: ""
  });
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: ""
  });

  const fetcherEmpresario = async () => {
    const response = await axios.get("http://localhost:4000/api/empresario/");
    setAdmin(response.data);
    const usuario = response.data.empresarios[0];
    console.log(usuario);
    setUser({
      nombre: usuario.nombre,
      apellido_paterno: usuario.apellido_paterno,
      apellido_materno: usuario.apellido_materno,
      email: usuario.email,
      telefono: usuario.telefono
    });
  };

  useEffect(() => {
    fetcherEmpresario();
  }, []);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleChange = (e) =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleRestart = () => {
    setEdit(false);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("submit");
    await axios.put("http://localhost:4000/api/empresario/" + 1);
  };

  return (
    <Grid container xs={12} sm={12} md={12}>
      {edit ? (
        <>
          <Grid item xs={12} sm={12} md={12} className={classes.caja}>
            <Card className={classes.rootEdit} variant="outlined">
              <Typography
                variant="h3"
                color="primary"
                className={classes.tituloEdit}
              >
                Editar Información
              </Typography>
              <Grid item xs={12} sm={12} md={12}>
                <CardContent className={classes.datosEdit}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      value={user.nombre}
                      onChange={handleChange}
                      name="nombre"
                      id="nombre"
                      autoFocus
                      className={classes.textField}
                    />
                    <TextField
                      id="apellidoPaterno"
                      onChange={handleChange}
                      value={user.apellido_paterno}
                      className={classes.textField}
                      name="apellidoPaterno"
                    />
                    <TextField
                      onChange={handleChange}
                      id="apellidoMaterno"
                      value={user.apellido_materno}
                      className={classes.textField}
                      name="apellidoMaterno"
                    />

                    <TextField
                      onChange={handleChange}
                      id="email"
                      value={user.email}
                      className={classes.textField}
                      name="email"
                    />
                    <TextField
                      onChange={handleChange}
                      id="telefono"
                      value={user.telefono}
                      className={classes.textField}
                      name="telefono"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      size="large"
                      className={classes.butonEdit}
                      onClick={handleRestart}
                    >
                      Guardar
                    </Button>
                  </form>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={12} md={12} className={classes.titulo}>
            <Typography variant="h3" color="primary">
              Mi Perfil
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.caja}>
            <Card className={classes.root} variant="outlined">
              <Grid item xs={12} sm={12} md={12}>
                <CardContent className={classes.datos}>
                  <Typography variant="h4" color="secondary">
                    {user.nombre}
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    {user.apellido_paterno}
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    {user.apellido_materno}
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    {user.email}
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    {user.telefono}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buton}
                    onClick={handleEdit}
                  >
                    Editar Informacion
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Perfil;
