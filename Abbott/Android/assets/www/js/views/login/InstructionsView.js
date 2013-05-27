InstructionsView = apps.ui.View.extend({

    initialize : function(options) {
        apps.ui.View.prototype.initialize.call(this, options);

        this.prefix = 'InstructionsView';
        util.log(this.prefix, 'initialize()');

        this.el = $($('#instructionsTemplate', App.templates).html());

        this.parent = options.parent;
        this.delegateEvents();

        this.activated = false;
    },
    
    events : {
        'touchend #homeEmpezar' : 'onHomeEmpezar'
    },

    activate : function() {
        if (this.activated == false) {
            this.activated = true;
        }
    },
    
    onHomeEmpezar : function(){
        this.parent.setView('login');
    }
});
