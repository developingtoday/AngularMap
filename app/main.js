"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_2 = require('angular2-google-maps/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [core_2.GOOGLE_MAPS_PROVIDERS], core_1.provide(core_2.LazyMapsAPILoaderConfig, {
    useFactory: function () {
        var config = new core_2.LazyMapsAPILoaderConfig();
        config.apiKey = "AIzaSyCN8k9JNzct9wajoOoplow8Rpu9TyLp7Uc";
        return config;
    }
}));
//# sourceMappingURL=main.js.map