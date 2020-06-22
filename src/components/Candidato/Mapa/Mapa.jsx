import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Locations from "../../../Locatiions.json";
import { Icon } from "leaflet";
import "./Mapa.css";
import { Grid, Card, Typography, Button, CardContent } from "@material-ui/core";
import styles from "./Mapa.styles";

const icon = new Icon({
  iconUrl: "/trabajo.svg",
  iconSize: [30, 30]
});

function Mapa() {
  // console.log(Locations);
  const classes = styles();

  const clickDetalles = (id, empleo) => {
    console.log(id + " " + empleo);
    
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <div className="mapa">
          <Map
            center={[17.05, -96.7167]}
            zoom={8}
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
            {Locations.map(locacion => (
              <Marker
                key={locacion.id}
                icon={icon}
                position={[
                  locacion.location.latitud,
                  locacion.location.longitud
                ]}
              >
                <Popup
                  position={[
                    locacion.location.latitud,
                    locacion.location.longitud
                  ]}
                >
                  <p> {locacion.empleo}</p>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => clickDetalles(locacion.id, locacion.empleo)}
                  >
                    Ver Detalles
                  </Button>
                </Popup>
              </Marker>
            ))}
          </Map>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="h4">Datos de la vacante</Typography>
                <Grid item>DETALLES DE LA PETICION</Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
{
}

export default Mapa;
