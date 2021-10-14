import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

export default function MapLibre() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 40.3772,
    longitude: -105.5217,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      mapStyle="https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}
    />
  );
}
