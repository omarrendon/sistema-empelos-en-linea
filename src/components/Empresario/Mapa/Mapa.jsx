import React, { useState } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core";
import style from "./Mapa.style";
import "./Mapa.css";


const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

function Mapa() {
  
  const prov = new OpenStreetMapProvider();
  const GeoSearchControlElement = withLeaflet(SearchControl);
  const classes = style();
  const [currentPos, setCurrentPos] = useState(null);
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    salrio: "",
    contrato: ""
  });

  const handleClick = e => {
    setCurrentPos(e.latlng);
    console.log(currentPos);
  };

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = event => {
    const {nombre, descripcion, salario, contrato} = formulario;
    const {lat, lng} = currentPos;
    event.preventDefault();
    console.log(
      "DATOS DEL FORMULARIO : " +
        "NOMBRE " +
        nombre +
        " DESCRIPCION" +
        descripcion +
        " SALALRIO" +
        salario +
        " CONTRATOS " +
        contrato +
        " LATITUD" + lat +
        " LONGITUD" + lng 
    );

    

  };

  return (
    <Grid container className={classes.principal}>
      <Grid item xs={12} sm={12} md={12} className={classes.titulo}>
        <Typography variant="h2" color="secondary">
          Agregar Nueva Propuesta de Empleo
        </Typography>
      </Grid>

      {/* Grid del formulario del empleo */}
      <Grid container xs={12} sm={12} md={12} className={classes.descripcion}>
        <Grid item xs={12} sm={12} md={12} className={classes.paper}>
          <Paper elevation={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.subtitulo}
              >
                Datos de la Vacante
              </Typography>
            </Grid>
            <Grid container xs={12} sm={12} md={12}>
              <Grid item xs={12} sm={12} md={12}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Grid item xs={12} sm={12} md={12} className={classes.root}>
                    <TextField
                      name="nombre"
                      required
                      onChange={handleChange}
                      id="nombre"
                      label="Nombre de la vacante"
                      autoFocus
                      className={classes.field}
                    />
                    <TextField
                      name="descripcion"
                      required
                      onChange={handleChange}
                      id="descripcion"
                      label="Descripción de la vacante"
                      className={classes.field}
                    />
                    <TextField
                      name="salario"
                      id="salario"
                      onChange={handleChange}
                      label="Salario de la vacante"
                      type="number"
                      className={classes.field}
                    />
                    <TextField
                      name="contrato"
                      required
                      onChange={handleChange}
                      id="contrato"
                      label="Tipo de Contrato"
                      className={classes.field}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} className={classes.mapa}>
                    <Typography variant="h6" color="secondary">
                      Buscar ubicación del empleo
                    </Typography>
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
                      onClick={handleClick}
                      className="map"
                    >
                      <GeoSearchControlElement
                        provider={prov}
                        showMarker={false}
                        showPopup={false}
                        popupFormat={({ query, result }) => result.label}
                        maxMarkers={3}
                        retainZoomLevel={false}
                        animateZoom={true}
                        autoClose={true}
                        searchLabel={"Ingresar Dirección"}
                        keepResult={true}
                      />
                      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />

                      {currentPos && (
                        <MyMarker position={currentPos}>
                          <Popup position={currentPos}>
                            Ubcación Actual:{" "}
                            <pre>{JSON.stringify(currentPos, null, 2)}</pre>
                          </Popup>
                        </MyMarker>
                      )}
                    </Map>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buton}
                    type="submit"
                  >
                    Guardar
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withLeaflet(Mapa);
