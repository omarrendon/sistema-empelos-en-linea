import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import Locations from "../../../Locatiions.json";
import { Icon } from "leaflet";
import "./Mapa.css";
import {
  Grid,
  Card,
  Typography,
  Button,
  Snackbar,
  TextField
} from "@material-ui/core";
import styles from "./Mapa.styles";
import axios from "axios";
import SaveIcon from "@material-ui/icons/Save";

const icon = new Icon({
  iconUrl: "/trabajo.svg",
  iconSize: [30, 30]
});

function Mapa() {
  const classes = styles();
  const [data, setData] = useState({ publicaciones: [] });
  const [file, setFile] = useState(null);
  // const [detalle, setDetalle] = useState([]);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClickSnack = newState => () => {
    setState({ open: true, ...newState });
  };
  
  const fetcher = async () => {
    const response = await axios.get("/api/publicacion/");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetcher();
    // clickDetalles();
  }, []);

  // const clickDetalles = async id_publicacion => {
  //   console.log(id_publicacion);
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:4000/api/publicacion/" + id_publicacion
  //     );
  //     setDetalle(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(detalle);
  // };
  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myCV", file, file.name);
    console.log(file);
    // axios.post("http://localhost:4000/api/cxp/", formData);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <div className="mapa">
          <Map
            center={[17.05, -96.7167]}
            zoom={6}
            maxZoom={18}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            className="map"
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.publicaciones.map(publicacion => (
              <Marker
                key={publicacion.id_publicacion}
                icon={icon}
                position={[publicacion.latitud, publicacion.longitud]}
              >
                <Popup position={[publicacion.latitud, publicacion.longitud]}>
                  <Typography
                    variant="h6"
                    color="secondary"
                    className={classes.tituloPropuesta}
                  >
                    {publicacion.titulo}
                  </Typography>
                  <p className={classes.descripcionPropuesta}>
                    {publicacion.descripcion}
                  </p>
                  <p className={classes.descripcionPropuesta}>
                    <strong>Salario : $</strong>
                    {publicacion.salario}
                  </p>
                  <p className={classes.descripcionPropuesta}>
                    <strong>Contrato : </strong>
                    {publicacion.contrato}
                  </p>
                  <p className={classes.descripcionPropuesta}>
                    <strong>Contacto : </strong>
                    {publicacion.empresario.email}
                  </p>
                  <TextField
                    id="standard-basic"
                    type="file"
                    onChange={onFileChange}
                  />
                  {/* <input type="file" onChange={onFileChange} /> */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    className={classes.botonPropuesta}
                    onClick={
                      (onFileUpload,
                      handleClickSnack({
                        vertical: "bottom",
                        horizontal: "center"
                      }))
                    }
                  >
                    Enviar CV
                  </Button>
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    message="Solicitud Enviada"
                    key={vertical + horizontal}
                  />
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    // onClick={() => clickDetalles(publicacion.id_publicacion)}
                    className={classes.botonPropuesta}
                  >
                    Ver Detalles
                  </Button> */}
                </Popup>
              </Marker>
            ))}
          </Map>
        </div>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12} className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="h4" color="secondary">
              DETALLES DE LA VACANTE
            </Typography>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}

export default Mapa;
