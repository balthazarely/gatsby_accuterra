import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import MapTabs from '../ui-components/map-tabs';

export default function MobileMap() {
  const mobileCodeData = useStaticQuery(graphql`
    query NonPageQuery {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "code-sample-mobile" } } }
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
  let codeExamples = mobileCodeData.allMarkdownRemark.edges;

  const mapCode = [
    { name: 'Mapbox Android' },
    { name: 'Mapbox iOS' },
    { name: 'Google Maps Android' },
    { name: 'Google Maps iOS' },
    { name: 'ArcGIS Android' },
    { name: 'ArcGIS iOS' },
  ];
  const [activeCode, setActiveCode] = useState(mapCode[0]);

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
  }, []);

  return (
    <div>
      <p className="text-accuterraBlue-500 text-3xl text-md font-bold my-1 cursor-pointer ">
        Mobile Code Samples
      </p>
      <div className="relative w-full shadow-lg bg-white p-4 mb-16">
        <MapTabs
          activeMap={activeCode}
          setMap={setActiveCode}
          mapStyles={mapCode}
        />
        <p className="text-gray-700  text-2xl font-bold my-4">
          Accuterra {activeCode.name}
        </p>
        {codeExamples.map((code) => {
          let active =
            activeCode.name === code.node.frontmatter.title ? true : false;
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
