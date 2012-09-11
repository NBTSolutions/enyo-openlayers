enyo.kind({
    name: 'nbt.OpenLayers',
    fit: true,
    options: null,
    kind: 'Control',
    published: {
        map: null
    },
    events: {
        ready: ""
    },
    components: [
        { name: 'map', style: 'height: 100%' }
    ],
    constructor: function(options) {
        this.inherited(arguments);
        this.options = options ? options : { };
    },
    create: function() {
        this.inherited(arguments);

        if (this.options && this.options.div !== undefined) {
            this.$.map.setId(this.options.div);
        }
    },
    rendered: function() {
        this.inherited(arguments);

        if (this.options && !this.options.div) {
            this.options.div = 'openLayers_map';
        }
        this.map = new OpenLayers.Map(this.options);
        this.doReady();
    }
});
