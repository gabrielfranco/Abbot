CreateGaleryView = apps.ui.View.extend({

    initialize : function(options) {
        apps.ui.View.prototype.initialize.call(this, options);

        this.prefix = 'CreateGaleryView';
        util.log(this.prefix, 'initialize()');

        this.el = $($('#CreateGalleryTemplate', App.templates).html());

        this.parent = options.parent;
        this.delegateEvents();

        this.activated = false;
    },
    
    events : {

    },

    activate : function() {
        if (this.activated == false) {
            this.activated = true;
        }
    }
});
