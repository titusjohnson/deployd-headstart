$(function(){
    // Initialize the master View Model.
    App.State = new App.ViewModels.MasterViewModel();
    ko.applyBindings(App.State, document.getElementById("App"));

    // Routes table 
    // This is a route => method name relationship
    // 
    // See Finch.js documentation for more about how you can use the router.
    // http://stoodder.github.io/finchjs/
    App.Routes = {
        "": "Home",
        "settings/:alpha": "Settings"
    }

    // Register each table item as a route to watch
    $.each(App.Routes, function(key, value) {
        Finch.route(key, function(bindings) {
            // When a route is called init a new sub-VM.
            App.State.TemplateViewModel(new returnObjectByName("App.ViewModels."+value, window, bindings, App.State), document.getElementById("PageTemplate"));
            // Set the default template after the sub-VM is loaded.
            App.State.Template(value.toLowerCase());
        });
    });

    // Start the application
    Finch.listen();
});