---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'ArcGIS iOS'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-mobile'
---

```swift
import UIKit
import ArcGIS

class ViewController: UIViewController {

    @IBOutlet weak var mapView: AGSMapView!

    override func viewDidLoad() {
        super.viewDidLoad()

        title = "ArcGIS SDK with AccuTerra Maps"

        // Visit https://accuterra.com and create your free account to get a map API key.
        let accuterraMapsKey = "YOUR-MAP-API-KEY-HERE"

        let url = "https://maps.accuterra.com/v1/raster/accuterra-outdoors/{level}/{col}/{row}.jpg?key=\(accuterraMapsKey)"
        let webTiledLayer = AGSWebTiledLayer(urlTemplate: url)
        webTiledLayer.attribution = "Map tiles by AccuTerra Maps"

        let basemap = AGSBasemap(baseLayer: webTiledLayer)
        mapView.map = AGSMap(basemap: basemap)

        let viewpoint = AGSViewpoint(latitude: 39.375239, longitude: -104.861077, scale: 6000)
        mapView.setViewpoint(viewpoint)
    }

}

```
