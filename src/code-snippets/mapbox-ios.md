---
path: '/blog/blog-test-3'
categories: ['code-sample']
title: 'Mapbox iOS'
author: 'code-sample'
date: '2021-04-13'
thumbnailImage: './blog-images/blog-placeholder.jpg'
key: 'code-sample-mobile'
---

```swift
import UIKit
import Mapbox

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Visit https://accuterra.com and create your free account to get a map API key.
        let accuterraMapsKey = "YOUR-MAP-API-KEY-HERE"

        let url = URL(string: "https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=\(accuterraMapsKey)")
        let mapView = MGLMapView(frame: view.bounds, styleURL: url)
        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        mapView.setCenter(CLLocationCoordinate2D(latitude: 39.375239, longitude: -104.861077), zoomLevel: 14, animated: false)
        view.addSubview(mapView)
    }
}


```
