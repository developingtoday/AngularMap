import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {GeolocationService} from './shared/geolocation.service';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from 'angular2-google-maps/core'

@NgModule({
  imports:      [ BrowserModule,HttpModule,AgmCoreModule.forRoot()],
  providers:    [GeolocationService ],
  declarations: [ AppComponent,MapComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
    
}