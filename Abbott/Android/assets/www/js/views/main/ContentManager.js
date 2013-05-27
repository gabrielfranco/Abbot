ContentManager = apps.ui.ViewManager.extend({
    
    initialize: function(options) {
        apps.ui.ViewManager.prototype.initialize.call(this, options);
        
        this.prefix = 'ContentManager';
        util.log(this.prefix,'initialize()');
        
        this.el = $(options.element);

        this.currentView = null;
          
        this.delegateEvents();

        this.views = {
                mybaby:                new MyBabyView({parent:this,backButton:false,title:'Mi bebé',months:false,icon:"icon_settings.png", menuButton:true, secondButton: 'editprofile'}),
                registerprofile:       new RegisterProfileView({parent:this,backButton:true,title:'Usuario Nuevo',months:false,icon:false, menuButton:false, secondButton:false}),
                terms:                 new TermsView({parent:this,backButton:true,title:'Términos y condiciones',months:false,icon:false, menuButton:false, secondButton:false}),
                editprofile:           new TermsView({parent:this,backButton:true,title:'Editar perfil',months:false,icon:false, menuButton:false, secondButton:false}),
                stages:                new StagesView({parent:this,backButton:false,title:'Etapas de desarrollo',months:true,icon:"arrow_up.png", menuButton:true, secondButton:false}),
                stagedetail:           new StageDetailView({parent:this,backButton:true,title:'Detalle etapas',months:false,icon:false, menuButton:false, secondButton:false}),           
                tips:                  new TipsView({parent:this,backButton:true,title:'Tips',months:false,icon:false, menuButton:false, secondButton:false}),
                diary:                 new DiaryView({parent:this,backButton:false,title:'Diario',months:false,icon:"icon_create_gallery.png", menuButton:false, secondButton:"creategallery"})
        };
    },
    
    events:{
        
    },
    
    handleBackButton: function() {
        util.log(this.prefix,'handleBackButton()');
        var handled = false;
        if (this.currentView && this.currentView.handleBackButton) {
            handled = this.currentView.handleBackButton();
        }
        util.log(this.prefix,'handleBackButton() handled: ' + handled);
        return handled;
    },
    
    viewIcon : function(){
        util.log(this.prefix,'viewIcon()');
        if (this.currentView && this.currentView.viewIcon) {
            this.currentView.viewIcon();
        }
    },
    
    setView: function(id, options) {
        util.log(this.prefix,'setView() id: ' + id + ' options: ' + JSON.stringify(options));
        var view = this.views[id];
        if (view) {
            apps.ui.ViewManager.prototype.setView.call(this, view, options);
            this.currentView = view;
            this.displayViewProperties();
        }
    },
    
    displayViewProperties : function(){
       //TODO:
    },
    
    clear: function(){
        this.el.hide();
        apps.ui.ViewManager.prototype.clear.call(this);
    },

    show: function(){       
        this.el.show();
    }
});