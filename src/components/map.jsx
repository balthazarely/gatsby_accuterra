import React, { useRef, useEffect, useState } from 'react';
import outdoor from '../assets/images/map-toggle-images/outdoors.webp';
import topo from '../assets/images/map-toggle-images/topo.webp';
import darkGrey from '../assets/images/map-toggle-images/dark_grey.webp';
import lightGrey from '../assets/images/map-toggle-images/light_grey.webp';
import terrain from '../assets/images/map-toggle-images/terrain.webp';
import satellite from '../assets/images/map-toggle-images/satellite.webp';
import maplibregl from 'maplibre-gl';
import { MapToggleBtn } from './ui-components/map-toggle-btn';

const mapContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 80px)',
  zIndex: 1,
};

const MapLibreExplore = () => {
  const mapStyles = [
    {
      style: outdoor,
      name: 'Outdoor',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json',
    },
    {
      style: topo,
      name: 'Topo',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-topo/style.json',
    },
    {
      style: darkGrey,
      name: 'Dark Grey',
      url: 'https://maps.accuterra.com/v1/styles/dark-grey/style.json',
    },
    {
      style: lightGrey,
      name: 'Light Grey',
      url: 'https://maps.accuterra.com/v1/styles/light-grey/style.json',
    },
    {
      style: terrain,
      name: 'Terrain',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-terrain/style.json',
    },
    {
      style: satellite,
      name: 'Satellite',
      url: 'https://maps.accuterra.com/v1/styles/labels/style.json',
    },
  ];

  const [activeMap, setActiveMap] = useState(mapStyles[0]);
  const [mapFilterOpen, setMapFilterOpen] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);

  const accessLocalStorage = (localStorageName) => {
    if (localStorage.getItem(localStorageName)) {
      let coords = localStorage.getItem(localStorageName);
      return JSON.parse(coords);
    }
  };

  const setCenter = () => {
    let localStorage = accessLocalStorage('accuterraMapSettings');
    return localStorage
      ? [localStorage.lng, localStorage.lat]
      : [-105.5217, 40.3772];
  };

  const setZoom = () => {
    let localStorage = accessLocalStorage('accuterraMapSettings');
    return localStorage ? localStorage.zoom : 11;
  };

  const onMove = () => {
    localStorage.setItem(
      'accuterraMapSettings',
      JSON.stringify({
        lat: map.current.getCenter().lat,
        lng: map.current.getCenter().lng,
        zoom: map.current.getZoom(),
      })
    );
  };

  const getMapStyle = () => {
    let localStorage = accessLocalStorage('activeMap');
    if (localStorage) {
      setActiveMap(localStorage);
      return `${localStorage.url}?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`;
    } else {
      return `${activeMap.url}?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`;
    }
  };

  const setMapStyles = (style) => {
    map.current.setStyle(
      `${style.url}?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`
    );
    localStorage.setItem('activeMap', JSON.stringify(style));
    setActiveMap(style);
    setMapFilterOpen(false);
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      accessToken: process.env.GATSBY_ENV_MAPBOX_TOKEN,
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: setCenter(),
      zoom: setZoom(),
      hash: true,

      customAttribution:
        '<a href="https://accuterra.com/" target="_blank">© AccuTerra</a>',
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.setStyle(getMapStyle());
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    map.current.on('moveend', (e) => {
      onMove();
    });
    map.current.on('touchend', (e) => {
      onMove();
    });

    return () => {
      map.current.remove();
      window.history.pushState(null, null, ' ');
    };
  }, []);

  return (
    <div className="relative ">
      <MapToggleBtn
        mapFilterOpen={mapFilterOpen}
        activeMap={activeMap}
        mapStyles={mapStyles}
        setMapStyles={setMapStyles}
        setMapFilterOpen={setMapFilterOpen}
      />
      <div ref={mapContainer} style={mapContainerStyle} />
    </div>
  );
};

export default MapLibreExplore;
