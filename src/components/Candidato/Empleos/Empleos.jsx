import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Snackbar
} from "@material-ui/core";
import styles from "./Empleos.styles";
import axios from "axios";

function Empleos() {
  const classes = styles();
  const [data, setData] = useState({ publicaciones: [] });

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const fetcher = async () => {
    const response = await axios.get("http://localhost:4000/api/publicacion/");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const handleDelete = async (id_publicacion, newState) => {
    console.log(id_publicacion);

    await axios.delete(
      "http://localhost:4000/api/publicacion/" + id_publicacion
    );
    console.log("Publicacion elimnada " + id_publicacion);
    setState({ open: true, ...newState });
    fetcher();
  };

  return (
    <Grid container item xs={12} sm={12} md={12} className={classes.root}>
      <Grid item className={classes.card}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.titulo}
            >
              Mis Empleos
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.empleosCard}
              >
                {data.publicaciones.map(publicacion => (
                  <>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h4" color="secondary">
                          {publicacion.titulo}
                        </Typography>
                        <h3>{publicacion.descripcion}</h3>
                        <p>
                          <Typography variant="h7" color="secondary">
                            Salario :
                          </Typography>{" "}
                          ${publicacion.salario}
                        </p>
                        <p>
                          <Typography variant="h7" color="secondary">
                            Contrato :{" "}
                          </Typography>
                          {publicacion.contrato}
                        </p>
                        <p>
                          <Typography variant="h7" color="secondary">
                            Fecha de Publicacion :{" "}
                          </Typography>
                          {publicacion.fecha_publicacion}
                        </p>
                      </CardContent>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.btnEliminar}
                        onClick={() =>
                          handleDelete(publicacion.id_publicacion, {
                            vertical: "bottom",
                            horizontal: "center"
                          })
                        }
                      >
                        Eliminar
                      </Button>
                    </Card>
                    <hr />
                    <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      autoHideDuration={1000}
                      onClose={handleClose}
                      message="Publicación Eliminada"
                      key={vertical + horizontal}
                    />
                  </>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Empleos;
