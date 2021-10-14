import React, { useState, useEffect } from 'react';
import Seo from '../components/seo';
import Layout from '../layouts/layout';
import MapLibreExplore from '../components/map';

export default function ExploreMap({ location }) {
  console.log(location);
  return (
    <Layout>
      <div className="relative">
        <Seo title="Explore Map" />
        <MapLibreExplore />
      </div>
    </Layout>
  );
}
