import React from 'react';
import { useEffect } from 'react';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import olms from 'ol-mapbox-style';
import FullScreen from 'ol/control/FullScreen';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

export default function OpenLayers() {
  useEffect(() => {
    var myKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

    olms(
      'map',
      `https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=${myKey}`
    ).then(function (map) {
      map.addControl(new FullScreen());
      let view = map.getView();
      view.setCenter(fromLonLat([-105.5217, 40.3772]));
      view.setZoom(11);
      map.setView(view);
    });
  }, []);

  return (
    <div>
      <div id="map" style={mapContainerStyle}></div>
    </div>
  );
}
