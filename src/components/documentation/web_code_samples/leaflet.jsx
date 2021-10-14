import React, { Component } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

export default class Leaflet extends Component {
  componentDidMount() {
    setTimeout(() => {
      var myKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

      let mymap = window.L.map('mapid').setView([40.3772, -105.5217], 11);
      var myKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';
      window.L.tileLayer(
        `https://{s}.accuterra.com/v1/raster/accuterra-outdoors/{z}/{x}/{y}.jpg?key=${myKey}`,
        {
          maxZoom: 16,
          attribution: '&copy; AccuTerra Maps',
          subdomains: ['maps-d1', 'maps-d2', 'maps-d3', 'maps-d4'],
        }
      ).addTo(mymap);
    }, 1000);
  }
  render() {
    return <div id="mapid" style={mapContainerStyle}></div>;
  }
}

// import React, { Component } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Helmet } from 'react-helmet';

// export default class Leaflet extends Component {
//   render() {
//     return (
//       <div>
//         Leaflet map
//         <Helmet>
//           <link
//             rel="stylesheet"
//             href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//             integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//             crossorigin=""
//           />
//         </Helmet>
//         <MapContainer
//           center={[40.3772, -105.5217]}
//           zoom={11}
//           style={{ height: '400px' }}
//         >
//           <TileLayer
//             attribution="&copy; AccuTerra Maps"
//             url="https://{s}.accuterra.com/v1/raster/accuterra-outdoors/{z}/{x}/{y}.jpg?key=eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc"
//             subdomains={['maps-d1', 'maps-d2', 'maps-d3', 'maps-d4']}
//           />
//           <Marker position={[52, -0.5]}>
//             <Popup>'hi i am a marker'</Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     );
//   }
// }
