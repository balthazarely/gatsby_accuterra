---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'Map Libre'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-web'
---

```
<html>
<head>
<meta charset="utf-8" />
<title>Display a map</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css" rel="stylesheet" />
<style>
	body { margin: 0; padding: 0; }
	#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
    <div id="map"></div>
    <script>
    const myAPIKey = 'eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc';

    var map = new maplibregl.Map({
    container: 'map', // container id
    style: `https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=${myAPIKey}`,
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
    });
    </script>

</body>
</html>


```
