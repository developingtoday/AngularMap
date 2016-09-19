// import {provide} from '@angular/core';
// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {AppComponent} from './app.component';
// import {GOOGLE_MAPS_PROVIDERS,LazyMapsAPILoaderConfig} from 'angular2-google-maps/core'; 

// bootstrap(AppComponent,[GOOGLE_MAPS_PROVIDERS]);

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);