---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'Leaflet'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<head>
  <title>Leaflet</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossOrigin="" />
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossOrigin=""></script>
  <style>
    html,
    body {
      height: 100%;
      padding: 0;
      margin: 0;
    }

    #map {
      /* configure the size of the map */
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <div id="map"></div>
  <script>
    // initialize Leaflet
    var map = L.map('map').setView({
      lon: -105.00,
      lat: 39.65
    }, 10);

    var myKey = "eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc";
    L.tileLayer(
      `https://{s}.accuterra.com/v1/raster/accuterra-outdoors/{z}/{x}/{y}.jpg?key=YOUR_API_KEY`, {
        maxZoom: 16,
        attribution: '&copy; AccuTerra Maps',
        subdomains: [
          "maps-d1",
          "maps-d2",
          "maps-d3",
          "maps-d4",
        ]
      }).addTo(map);
  </script>
</body>

</html>


```
