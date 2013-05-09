App.ViewModels.Settings = function(url_values, state) {
    var self = this;

	state.PageTitle("Settings");

    self.alpha = ko.observable(url_values["alpha"]);


    return self;
}