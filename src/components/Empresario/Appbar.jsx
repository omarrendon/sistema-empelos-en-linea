import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import "./Mapa/Mapa.css";

const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
    console.log(this.state.currentPos.lat);
    
  }

  render() {
    return (
      <div>
        <Map
          center={[17.05, -96.7167]}
          zoom={6}
          onClick={this.handleClick}
          className="map"
        >
          <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {this.state.currentPos && (
            <MyMarker position={this.state.currentPos}>
              <Popup position={this.state.currentPos}>
                Current location:{" "}
                <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </MyMarker>
          )}
        </Map>
      </div>
    );
  }
}

export default MapExample;

// import React, { useState } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import { Grid } from "@material-ui/core";
// import "./Mapa/Mapa.css";
// import { latLng } from "leaflet";

// const MyMarker = props => {
//   const initMarker = ref => {
//     if (ref) {
//       ref.leafletElement.openPopup();
//     }
//   };

//   return <Marker ref={initMarker} {...props} />;
// };

// function Appbar() {
//   const [posicion, setPosicion] = useState(null);

//   const handleClick = e => {
//     setPosicion({ posicion : posicion.e.latLng });
//     console.log(posicion);
//   };

//   return (
//     <Grid container>
//       <Map
//         center={[17.05, -96.7167]}
//         zoom={8}
//         maxZoom={18}
//         attributionControl={true}
//         zoomControl={true}
//         doubleClickZoom={true}
//         scrollWheelZoom={true}
//         dragging={true}
//         animate={true}
//         easeLinearity={0.35}
//         className="map"
//         onClick={handleClick}
//       >
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {posicion && (
//           <MyMarker position={posicion}>
//             <Popup position={posicion}>
//         Locacion actual : <pre>{JSON.stringify(posicion, null, 2)}</pre>
//             </Popup>
//           </MyMarker>
//         )}
//       </Map>
//     </Grid>
//   );
// }

// export default Appbar;
