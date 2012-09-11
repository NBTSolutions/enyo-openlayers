enyo.kind({
    name: "Demo",
    components: [
        {kind: "FittableRows", classes: "enyo-fit", components: [
            {kind: "onyx.Toolbar", components: [
                {kind: "onyx.Button", content: "NBT Solutions"},
            ]},
            {name: "theMap", kind: "nbt.OpenLayers", onReady: "onMapReady", fit: true}
        ]},
    ],
    onMapReady: function(event) {
        var map = event.getMap();

        var osm = new OpenLayers.Layer.OSM();
        osm.attribution = "";
        
        map.addLayer(osm);
        map.addControl(new OpenLayers.Control.LayerSwitcher());
        map.setCenter(
            new OpenLayers.LonLat(-97, 38).transform(
                new OpenLayers.Projection("EPSG:4326"),
                map.getProjectionObject()
            ), 
            5
        );
        console.log(map);
    }
});
