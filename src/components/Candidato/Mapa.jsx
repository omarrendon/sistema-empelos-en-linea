import React,  {useState, useEffect} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import axios from 'axios';

// import {Icon} from 'leaflet';
import './Styles/Mapa.css'

function Mapa() {
//   const [active, setActive] = useState(null);
//   const [data, setData] = useState([]);

  // useEffect( async () => {
  //   const response = await axios.get("../../Locations.json");
  //   setData(response.data)
    
  // }, []);
  
  // console.log(data);
  return (
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
        <Marker
          position={[17.05, -96.7167]}
          // onClick={ () => {
          //   setActive
          // }}
        >
          <Popup position={[17.05, -96.7167]}>
            <span> Hubicacionde l primer tarbajo</span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default Mapa;
