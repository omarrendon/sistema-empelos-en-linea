import React, { useState } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
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
  const [currentPos, setCurrentPos] = useState(null);
  
  const prov =  new OpenStreetMapProvider();
  const GeoSearchControlElement = withLeaflet(SearchControl);

  

  const handleClick = e => {
    setCurrentPos(e.latlng);
    console.log(currentPos);
  };

  return (
    <>
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
              Ubcación Actual: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
            </Popup>
          </MyMarker>
        )}
      </Map>
    </>
  );
}

export default withLeaflet( Mapa);
