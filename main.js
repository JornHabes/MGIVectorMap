var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sources": {
		"pdok":{
			"type": "vector",
			"tiles":  ["https://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf"]
		}
	},
	"layers":[ 
        { 
            "id":  "background",
            "type": "background",
            "paint": {
                "background-color":"#FFFFFF"
                }
        },
        {
            "id": "admin",
            "type": "fill",
            "source": "pdok",
            "source-layer": "admin",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "province"],
            "paint": {
                "fill-color" :"#F5F5DC",
                "fill-outline-color": "#F5F5DC"
            }
        },
		{
            "id": "infra",
            "type": "fill",
            "source": "pdok",
            "source-layer": "infra",
            "maxzoom": 22,
            "minzoom": 0,
            //"filter": ["==", "lod1", "buildings"],
            "paint": {
                "fill-color" :"#d3d3d3",
                "fill-outline-color": "#d3d3d3"
            }
        },
		{
            "id": "water",
            "type": "fill",
            "source": "pdok",
            "source-layer": "water",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "water_surface"],
            "paint": {
                "fill-color" :"#ADD8E6",
                "fill-outline-color": "#ADD8E6"
            }
        },
		{
            "id": "terrain",
            "type": "fill",
            "source": "pdok",
            "source-layer": "terrain",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "natural"],
            "paint": {
                "fill-color" :"#008000",
                "fill-outline-color": "#008000"
            }
        },
				{
            "id": "urban",
            "type": "fill",
            "source": "pdok",
            "source-layer": "urban",
            "maxzoom": 22,
            "minzoom": 0,
            //"filter": ["==", "lod1", "water_surface"],
            "paint": {
                "fill-color" :"#dfbc7b",
                "fill-outline-color": "#dfbc7b"
            }
        }
    ]
	};
	
var map = new mapboxgl.Map({
    container: 'map',
    style: mystyle,
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [ 4.8, 52.4]
});

// var wurjson = {
    // "type": "FeatureCollection",
    // "name": "15yrMGI",
    // "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    // "features": [
        // { "type": "Feature", "properties": { "fid": 0, "height": 60 }, "geometry": { "type": "Point", "coordinates": [5.66647, 51.98514] } },
        // { "type": "Feature", "properties": { "fid": 1, "height": 45 }, "geometry": { "type": "Point", "coordinates": [5.66801, 51.9864] } },
        // { "type": "Feature", "properties": { "fid": 2, "height": 100 }, "geometry": { "type": "Point", "coordinates": [5.66361, 51.98531] } },
        // { "type": "Feature", "properties": { "fid": 3, "height": 30 }, "geometry": { "type": "Polygon", "coordinates": [[[5.66554, 51.98675], [5.66832, 51.9875], [5.66778, 51.98825], [5.66602, 51.98779], [5.66591, 51.98784], [5.66501, 51.98758], [5.66498, 51.98753], [5.66554, 51.98675]]] } }
    // ]
// };

// map.on('load', function (e) {
    // // ADD GEOJSON SOURCE
    // map.addSource('punten', {
        // 'type': 'geojson',
        // 'data': wurjson
    // });
    // // ADD an extra layer
    // map.addLayer({
        // 'id': 'geojson-points',
        // 'type': 'circle',
        // 'source': 'punten',
        // 'layout': {},
        // 'paint': {
            // 'circle-color': '#000fff',
            // 'circle-radius': 10
        // }
    // });
// });
