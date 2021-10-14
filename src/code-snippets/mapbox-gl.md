---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'Mapbox GL'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<html>
  <head>
    <title>MapBox GL</title>
    <script
      type="text/javascript"
      src="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
    />
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      #my-map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="my-map"></div>
    <script type="text/javascript">
      var myKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';
      var map = new mapboxgl.Map({
        container: 'my-map',
        style: `https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=YOUR_API_KEY`,
        center: [-105.0, 39.65],
        zoom: 10,
        attributionControl: false,
      }).addControl(
        new mapboxgl.AttributionControl({
          compact: false,
          customAttribution: '&copy; AccuTerra Maps',
        })
      );
      map.addControl(new mapboxgl.NavigationControl());
    </script>
  </body>
</html>
```
