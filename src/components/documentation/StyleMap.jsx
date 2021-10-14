import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import {
  mapCodeSamples,
  mapEnvironment,
} from '../../environments/map-environment';
import { useStaticQuery, graphql } from 'gatsby';
import MapTabs from '../ui-components/map-tabs';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

const StyleMap = () => {
  const styleCodeData = useStaticQuery(graphql`
    query NonPageQuery3 {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "code-sample-style" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  let codeExamples = styleCodeData.allMarkdownRemark.edges;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-105.5217);
  const [lat, setLat] = useState(40.3772);
  const [zoom, setZoom] = useState(11);
  const [activeMap, setActiveMap] = useState(mapEnvironment.mapStyles[0]);
  const [activeCodeSample, setActiveCodeSample] = useState(mapCodeSamples[0]);

  useEffect(() => {
    async function load() {
      try {
        const deckdeckgoLoader = require('@deckdeckgo/highlight-code/dist/loader');
        await deckdeckgoLoader.defineCustomElements(window);
      } catch (err) {
        console.error(err);
      }
    }
    load();

    if (map.current) return;
    map.current = new maplibregl.Map({
      accessToken: process.env.GATSBY_ENV_MAPBOX_TOKEN,
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      customAttribution:
        '<a href="https://accuterra.com/" target="_blank">© AccuTerra</a>',
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.setStyle(
      `${activeMap.url}?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`
    );
    // map.current.setCenter([userLocation.lat, userLocation, lng]);
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
    return () => map.current.remove();
  }, []);

  const setMapStyles = (style) => {
    map.current.setStyle(
      `${style.url}?key=${process.env.GATSBY_ACCUTERRA_API_KEY}`
    );
    setActiveMap(style);
  };

  const interpolateActiveStyle = (code) => {
    return code.replace(/HERE/g, activeMap.id);
  };

  return (
    <div>
      <p className="text-accuterraBlue-500 text-3xl text-md font-bold my-1 cursor-pointer ">
        Map Styles
      </p>
      <div className="relative w-full shadow-lg p-4 mb-16 bg-white ">
        <MapTabs
          activeMap={activeMap}
          setMap={setMapStyles}
          mapStyles={mapEnvironment.mapStyles}
        />

        <p className="text-gray-700  text-2xl font-bold my-4">
          Accuterra {activeMap.name}
        </p>
        <p className="text-gray-700  text-normal font-normal my-4">
          A clean light basemap depicting AccuTerra’s terrain data. This map is
          available in both metric and imperial elevation units.
        </p>
        <div ref={mapContainer} style={mapContainerStyle} />

        <div className="code__sample__wrapper min-w-full  mb-4 mt-6  ">
          <MapTabs
            activeMap={activeCodeSample}
            setMap={setActiveCodeSample}
            mapStyles={mapCodeSamples}
          />

          {codeExamples.map((code, i) => {
            let active =
              activeCodeSample.name === code.node.frontmatter.title
                ? true
                : false;
            return (
              <div
                key={i}
                className={`${active ? 'visible ' : 'hidden'}`}
                dangerouslySetInnerHTML={{
                  __html: interpolateActiveStyle(code.node.html),
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StyleMap;
