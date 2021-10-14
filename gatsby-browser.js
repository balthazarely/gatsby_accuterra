import React from 'react';
import './src/styles/global.scss';
import './src/styles/blog.scss';
import '@fontsource/heebo/900.css'; // Defaults to weight 400 with all styles included.
import '@fontsource/heebo/700.css'; // Defaults to weight 400 with all styles included.
import '@fontsource/heebo/400.css'; // Defaults to weight 400 with all styles included.
import '@fontsource/heebo/200.css'; // Defaults to weight 400 with all styles included.
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const wrapPageElement = ({ element }) => (
  <div>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  </div>
);

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      ></script>
    </Helmet>
    {element}
  </>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), 250);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 250);
  }
  return false;
};
