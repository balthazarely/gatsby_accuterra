export const mapEnvironment = {
  mapSettings: {
    defaultStyle: 'accuterra-dark-grey',
    attribution:
      '<a href="https://accuterra.com/" target="_blank">© AccuTerra</a>',
    defaultExtent: [-128.0711, 16.563075, -63.94282, 55.374338], //lower 48
  },
  mapStyles: [
    {
      id: 'accuterra-outdoors',
      name: 'Outdoors',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json',
      thumbUrl: '../assets/images/map-toggle-images/style_topo.webp',
    },

    {
      id: 'accuterra-topo',
      name: 'Topo',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-topo/style.json',
      thumbUrl: '../assets/images/map-toggle-images/accuterra-topo.webp',
    },
    {
      id: 'accuterra-terrain',
      name: 'Terrain',
      url: 'https://maps.accuterra.com/v1/styles/accuterra-terrain/style.json',
      thumbUrl: '../assets/images/map-toggle-images/accuterra-terrain.webp',
    },
    {
      id: 'light-grey',
      name: 'Light Grey',
      url: 'https://maps.accuterra.com/v1/styles/light-grey/style.json',
      thumbUrl: '../assets/images/map-toggle-images/light-grey.webp',
    },
    {
      id: 'dark-grey',
      name: 'Dark Grey',
      url: 'https://maps.accuterra.com/v1/styles/dark-grey/style.json',
      thumbUrl: '../assets/images/map-toggle-images/dark-grey.webp',
    },
    {
      id: 'esri-world-imagery',
      name: 'Satellite',
      url: 'https://maps.accuterra.com/v1/styles/labels/style.json',
      thumbUrl: '../assets/images/map-toggle-images/style_topo.webp',
    },
  ],
};

export const mapCodeSamples = [
  {
    name: 'TileJSON',
    code: [
      'Imperial: https://maps.accuterra.com/v1/styles/HERE.json?apiKey=YOUR_API_KEY',
      'Metric: https://maps.accuterra.com/v1/styles/HERE-m.json?apiKey=YOUR_API_KEY',
    ],
  },
  {
    name: 'XYZ Raster',
    code: [
      'Imperial: https://maps.accuterra.com/v1/raster/HERE/{z}/{x}/{y}.jpg?key=YOUR_API_KEY',
      'Metric: https://maps.accuterra.com/v1/raster/HERE-m/{z}/{x}/{y}.jpg?key=YOUR_API_KEY',
    ],
  },
  {
    name: 'WMTS',
    code: [
      'Imperial: https://maps.accuterra.com/v1/styles/HERE/wmts.xml?key=YOUR_API_KEY',
      'Metric: https://maps.accuterra.com/v1/styles/HERE-m/wmts.xml?key=YOUR_API_KEY',
    ],
  },
];
