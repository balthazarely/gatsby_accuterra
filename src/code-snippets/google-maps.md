---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'Google Maps'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<html>
  <head>
    <title>Google Maps API with AccuTerra raster as base layer</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?sensor=false&key=AIzaSyBy9114j99nP1KuB4P_bAIrLhNR2JFiS8Y"
    ></script>
    <script type="text/javascript">
      var myAPIKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

      var element = document.getElementById('map');
      /*
        Build list of map types.
        You can also use var mapTypeIds = ["roadmap", "satellite", "hybrid", "terrain", "AccuTerra"]
        but static list is dangerous because Google might update the default list of map types.
        */
      var mapTypeIds = [];
      for (var type in google.maps.MapTypeId) {
        mapTypeIds.push(google.maps.MapTypeId[type]);
      }
      mapTypeIds.push('AccuTerra');

      var map = new google.maps.Map(element, {
        center: { lat: 39.6500327, lng: -105.0053989 },
        zoom: 10,
        mapTypeId: 'AccuTerra',
        mapTypeControlOptions: {
          mapTypeIds: mapTypeIds,
        },
      });

      map.mapTypes.set(
        'AccuTerra',
        new google.maps.ImageMapType({
          getTileUrl: function (coord, zoom) {
            return `https://maps.accuterra.com/v1/raster/accuterra-outdoors/${zoom}/${coord.x}/${coord.y}.jpg?key=YOUR_API_KEY`;
          },
          tileSize: new google.maps.Size(256, 256),
          name: 'AccuTerra',
          maxZoom: 18,
        })
      );
    </script>
  </body>
</html>
```
