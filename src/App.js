enyo.kind({
    name: "App",
    components: [
        {kind: "FittableRows", classes: "enyo-fit", components: [
            {kind: "onyx.Toolbar", layoutKind: "FittableColumnsLayout", style: "text-align: center", components: [
                {content: "NBT OpenLayers Control Demo for Enyo 2"}
            ]},
            {name: "theMap", kind: "nbt.OpenLayers", onReady: "onMapReady", fit: true},
        ]},
    ],
    onMapReady: function(inSender) {
        var map = inSender.getMap();

        var osm = new OpenLayers.Layer.OSM();
        osm.attribution = "";
        
        map.addLayer(osm);
        map.addControl(new OpenLayers.Control.LayerSwitcher());
        map.setCenter(
            new OpenLayers.LonLat(-97, 38).transform(
                new OpenLayers.Projection("EPSG:4326"),
                map.getProjectionObject()
            ), 
            4
        );
        console.log(map);
    },
    onNbtTap: function(inSender) {
        window.location = "http://www.nbtsolutions.com";
    }
});
