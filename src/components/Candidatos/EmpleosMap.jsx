import React, { useState, useEffect } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
import { Icon } from "leaflet";
import axios from "axios";
import { Button } from "react-bootstrap";

import "../Empresarios/Styles/Mapa.css";

const icon = new Icon({
  iconUrl: "/trabajo.svg",
  iconSize: [30, 30]
});

const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };
  return <Marker ref={initMarker} {...props} />;
};

function EmpleosMap(props) {
  const prov = new OpenStreetMapProvider();
  const GeoSearchControlElement = withLeaflet(SearchControl);
  const [currentPos, setCurrentPos] = useState(null);
  const [data, setData] = useState({ publicaciones: [] });
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/publicacion/",
      {}
    );
    setData(response.data);
  };

  const handleClick = e => {
    setCurrentPos(e.latlng);
    // props.currentPosition(currentPos);
    console.log(currentPos);
  };

  const handleDetails =  (publicacion) => {
    console.log(publicacion);
    setInfo(publicacion);
    props.infoPublicacion(publicacion)
    // console.log(info);
  };

  return (
    <>
      <Map
        center={[17.05, -96.7167]}
        zoom={4}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onclick={handleClick}
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
        {data.publicaciones.map(publicacion => (
          <Marker
            key={publicacion.id_publicacion}
            icon={icon}
            position={[publicacion.latitud, publicacion.longitud]}
          >
            <Popup position={[publicacion.latitud, publicacion.longitud]}>
              <p className="h3">{publicacion.titulo}</p>
              <p >
                {publicacion.descripcion}
              </p>
              <p>
                <strong>Salario : $</strong>
                {publicacion.salario}
              </p>
              <p>
                <strong>Contrato : </strong>
                {publicacion.contrato}
              </p>
              <p>
                <strong>Contacto : </strong>
                {publicacion.empresario.email}
              </p>
              
              <Button onClick={() => handleDetails(publicacion)}>Ver más</Button>
              
            </Popup>
          </Marker>
        ))}
      </Map>
    </>
  );
}

export default EmpleosMap;
