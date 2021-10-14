import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Map code and code-sample imports
import MapboxGl from './web_code_samples/mapboxGl';
import Leaflet from './web_code_samples/leaflet';
import OpenLayers from './web_code_samples/openLayers';
import GoogleMaps from './web_code_samples/googleMaps';
import MapLibre from './web_code_samples/mapLibre';
import MapTabs from '../ui-components/map-tabs';
import ArcGiS from './web_code_samples/arcGiS';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  zIndex: 1,
};

export default function WebMap() {
  const webCodeData = useStaticQuery(graphql`
    query NonPageQuery2 {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "code-sample-web" } } }
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
  let codeExamples = webCodeData.allMarkdownRemark.edges;

  const mapCode = [
    {
      name: 'Mapbox GL',
    },
    {
      name: 'Leaflet',
    },
    {
      name: 'OpenLayers',
    },
    {
      name: 'Map Libre',
    },
    {
      name: 'ArcGIS',
    },
    {
      name: 'Google Maps',
    },
  ];

  const [activeMap, setActiveMap] = useState(mapCode[0]);

  useEffect(() => {
    // Prism.highlightAll();
    async function load() {
      try {
        const deckdeckgoLoader = require('@deckdeckgo/highlight-code/dist/loader');
        await deckdeckgoLoader.defineCustomElements(window);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return (
    <div>
      <Helmet>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_ENV_GOOGLE_MAPS_API_KEY}&v=weekly`}
        ></script>
      </Helmet>

      <p className="text-accuterraBlue-500 text-3xl text-md font-bold my-1 cursor-pointer ">
        Web Code Samples
      </p>

      <div className=" w-full shadow-lg bg-white p-4 mb-16 ">
        <MapTabs
          activeMap={activeMap}
          setMap={setActiveMap}
          mapStyles={mapCode}
        />

        <p className="text-gray-700  text-2xl font-bold my-4">
          Accuterra {activeMap.name}
        </p>
        <div style={mapContainerStyle} className="relative ">
          <div
            style={mapContainerStyle}
            className={`absolute top-0 left-0 ${
              activeMap.name === 'Mapbox GL' ? 'visible ' : 'invisible'
            }`}
          >
            <MapboxGl />
          </div>
          {/* <div
            style={mapContainerStyle}
            className={` ${
              activeMap.name === 'Leaflet' ? 'visible ' : 'invisible'
            }`}
          >
            {typeof window !== 'undefined' && <Leaflet />}
          </div> */}
          <div
            style={mapContainerStyle}
            className={` ${
              activeMap.name === 'Leaflet' ? 'visible ' : 'invisible'
            }`}
          >
            {typeof window !== 'undefined' && <Leaflet />}
          </div>
          <div
            style={mapContainerStyle}
            className={`absolute top-0 left-0 ${
              activeMap.name === 'OpenLayers' ? 'visible ' : 'invisible'
            }`}
          >
            <OpenLayers />
          </div>
          <div
            style={mapContainerStyle}
            className={`absolute top-0 left-0 ${
              activeMap.name === 'Map Libre' ? 'visible ' : 'invisible'
            }`}
          >
            <MapLibre />
          </div>
          <div
            style={mapContainerStyle}
            className={`absolute top-0 left-0 ${
              activeMap.name === 'ArcGIS' ? 'visible ' : 'invisible'
            }`}
          >
            <ArcGiS />
          </div>
          <div
            style={mapContainerStyle}
            className={`absolute top-0 left-0 ${
              activeMap.name === 'Google Maps' ? 'visible ' : 'invisible'
            }`}
          >
            <GoogleMaps />
          </div>
        </div>
        {codeExamples.map((code) => {
          let active =
            activeMap.name === code.node.frontmatter.title ? true : false;
          return (
            <div
              key={code.node.title}
              className={`${active ? 'visible ' : 'hidden'}`}
            >
              <div dangerouslySetInnerHTML={{ __html: code.node.html }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
