import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

export default function MapboxGl() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-105.5217);
  const [lat, setLat] = useState(40.3772);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      accessToken: process.env.MAPBOX_TOKEN,
      container: mapContainer.current,
      style: `https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      customAttribution:
        '<a href="https://accuterra.com/" target="_blank">© AccuTerra</a>',
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
    return () => map.current.remove();
  }, []);

  return (
    <div className="">
      <div ref={mapContainer} style={mapContainerStyle} />
    </div>
  );
}
