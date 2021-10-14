import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { loadModules } from 'esri-loader';

export default function ArcGiS() {
  const mapRef = useRef();
  const myAPIKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

  useEffect(() => {
    loadModules(
      ['esri/Map', 'esri/views/MapView', 'esri/layers/WebTileLayer'],
      { css: true }
    ).then(([ArcGISMap, MapView, WebTileLayer]) => {
      let map = new ArcGISMap({
        // basemap: 'streets-vector',
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-105.5217, 40.3772],
        zoom: 11,
      });

      const tiledLayer = new WebTileLayer({
        urlTemplate: `
        https://maps.accuterra.com/v1/raster/accuterra-outdoors/{z}/{x}/{y}.jpg?key=${myAPIKey}`,
        opacity: 1,
      });
      map.add(tiledLayer);

      return () => {
        if (view) {
          view.container = null;
        }
      };
    });
  }, []);

  return (
    <div>
      <div
        className="webmap"
        style={{ height: 400, width: '100%' }}
        ref={mapRef}
      ></div>
      {/* in a perfect world, i would be an ersi map */}
    </div>
  );
}
