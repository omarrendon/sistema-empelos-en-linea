import React, { useState, useEffect } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
import { Icon } from "leaflet";
import "./Styles/Mapa.css";

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

function Mapa(props) {
  const prov = new OpenStreetMapProvider();
  const GeoSearchControlElement = withLeaflet(SearchControl);
  const [currentPos, setCurrentPos] = useState(null);

  const handleClick = e => {
    setCurrentPos(e.latlng);
    props.currentPosition(currentPos);
    console.log(currentPos);
  };

  return (
    <div>
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

        {props.validateMap
          ? props.mapaPosition && (
              <MyMarker
                icon={icon}
                position={[props.mapaPosition[0], props.mapaPosition[1]]}
              >
                <Popup
                  position={[props.mapaPosition[0], props.mapaPosition[1]]}
                >
                  Ubcación Actual del Empleo{" "}
                </Popup>
              </MyMarker>
            )
          : currentPos && (
              <MyMarker position={currentPos}>
                <Popup position={currentPos}> Ubcación Actual</Popup>
              </MyMarker>
            )}
      </Map>
    </div>
  );
}

export default Mapa;