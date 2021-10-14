import React, { Component } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

export default class GoogleMaps extends Component {
  componentDidMount() {
    setTimeout(() => {
      var mapTypeIds = [];
      for (var type in window.google.maps.MapTypeId) {
        mapTypeIds.push(window.google.maps.MapTypeId[type]);
      }
      let map = new window.google.maps.Map(
        document.getElementById('google-map'),
        {
          center: { lat: 40.3772, lng: -105.5217 },
          zoom: 11,
          mapTypeId: 'AccuTerra',
          mapTypeControlOptions: {
            mapTypeIds: mapTypeIds,
          },
        }
      );

      map.mapTypes.set(
        'AccuTerra',
        new window.google.maps.ImageMapType({
          getTileUrl: function (coord, zoom) {
            return `https://maps.accuterra.com/v1/raster/accuterra-outdoors/${zoom}/${coord.x}/${coord.y}.jpg?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`;
          },
          tileSize: new window.google.maps.Size(256, 256),
          name: 'AccuTerra',
          maxZoom: 18,
        })
      );
    }, 1000);
  }
  render() {
    return (
      <div>
        <div style={mapContainerStyle} id="google-map" />;
      </div>
    );
  }
}
