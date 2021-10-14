---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'OpenLayers'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<html>
  <head>
    <title>OpenLayers</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css"
      type="text/css"
    />
    <style type="text/css">
      html,
      body,
      #my-map {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>
    <script
      type="text/javascript"
      src="https://unpkg.com/ol-mapbox-style@6.1.4/dist/olms.js"
    ></script>
  </head>
  <body>
    <div id="my-map"></div>
    <script type="text/javascript">
      var myKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

      olms(
        'my-map',
        `https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=YOUR_API_KEY`
      ).then((map) => {
        let view = map.getView();
        view.setCenter(ol.proj.fromLonLat([-105.0053989, 39.6500327]));
        view.setZoom(10);
        map.setView(view);
      });
    </script>
  </body>
</html>
```
