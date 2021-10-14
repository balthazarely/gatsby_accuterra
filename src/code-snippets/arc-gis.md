---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'ArcGIS'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://js.arcgis.com/4.17/esri/themes/light/main.css"
    />
    <script src="https://js.arcgis.com/4.17/"></script>
    <title>ArcGIS JavaScript</title>
    <style>
      html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 300px;
        width: 100%;
      }
    </style>
    <script>
      require([
          "esri/Map",
          "esri/views/MapView",
          "esri/Basemap",
          "esri/layers/VectorTileLayer",
          "esri/layers/WebTileLayer",
        ], function(Map, MapView, Basemap, VectorTileLayer, WebTileLayer) {

        const myAPIKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

        //override all XHRs (used in 3.x) to append api key
        (function() {
          var proxyOpen = window.XMLHttpRequest.prototype.open;
          window.XMLHttpRequest.prototype.open = function() {
            var args = Array.prototype.slice.call(arguments);
            if (args[1].indexOf("accuterra.com")>0){
              args[1] += (args[1].indexOf("?") == -1 ? "?" : "&") + \`key=YOUR_API_KEY`;
            }
            return proxyOpen.apply(this, [].slice.call(args));
          };})();

        //override all fetch() calls (used in 4.x) to append api key
        (function () {
          var originalFetch = fetch;
          fetch = function() {
            var args = Array.prototype.slice.call(arguments);
            if (args[0].indexOf("accuterra.com")>0){
              args[0] += (args[0].indexOf("?") == -1 ? "?" : "&") + \`key=YOUR_API_KEY`;
            }
            return originalFetch.apply(this, args).then(function(data) {
              // someFunctionToDoSomething();
              return data;
            });
          };
        })();

        // base vector layer
        var basemap = new Basemap({
            baseLayers: [
              new VectorTileLayer({
                style: "esri-accuterra.json"
              })
            ]
          });

        var map = new Map({
          basemap: basemap
        });

        // contours vector layer
        var contourLayer = new VectorTileLayer({
                style: "esri-accuterra-contours.json"
        });
        map.add(contourLayer);

        // hill shade raster layer
        var hillShadeLayer = new WebTileLayer({
          urlTemplate: \`https://maps.accuterra.com/v1/data/hillshade/{level}/{col}/{row}.jpg?key=YOUR_API_KEY`,
              opacity: 0.2
        });
        map.add(hillShadeLayer);

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-105.0053989, 39.6500327], // longitude, latitude
          zoom: 10
        });
      });
    </script>
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
</html>
```
