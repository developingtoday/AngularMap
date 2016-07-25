"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var geolocation_service_1 = require('../shared/geolocation.service');
var MapComponent = (function () {
    function MapComponent(service) {
        this.service = service;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getLocation({ enableHighAccuracy: false }).subscribe(function (a) {
            console.log(a);
            _this.lat = a.coords.latitude;
            _this.lng = a.coords.longitude;
        }, function (d) {
            console.log(d);
        });
        this.markers = [];
    };
    MapComponent.prototype.addRandomGpsPoint = function () {
        console.log('adding some random');
        var lat = this.rand(this.lat - 1, this.lat + 1, 0.01);
        var longitude = this.rand(this.lng - 1, this.lng + 1, 0.01);
        this.markers.push({ lat: lat, lng: longitude, title: 'Title', label: 'A' });
    };
    MapComponent.prototype.rand = function (min, max, interval) {
        if (typeof (interval) === 'undefined')
            interval = 1;
        var r = Math.floor(Math.random() * (max - min + interval) / interval);
        return r * interval + min;
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            styleUrls: ['app/map/map.component.css'],
            templateUrl: 'app/map/map.component.html',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            providers: [geolocation_service_1.GeolocationService]
        }), 
        __metadata('design:paramtypes', [geolocation_service_1.GeolocationService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map