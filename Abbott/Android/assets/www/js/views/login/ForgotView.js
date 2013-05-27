ForgotView = apps.ui.View.extend({

    initialize : function(options) {
        apps.ui.View.prototype.initialize.call(this, options);

        this.prefix = 'ForgotView';
        util.log(this.prefix, 'initialize()');

        this.el = $($('#forgotTemplate', App.templates).html());

        this.parent = options.parent;
        this.delegateEvents();

        this.activated = false;
    },
    
    events : {
        'touchend #clickExample' : 'onClickExample'
    },

    activate : function() {
        if (this.activated == false) {
            this.activated = true;
        }
    },
    
    onClickExample : function(){
        App.alert('touch Example called');
    }
});
