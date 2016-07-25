import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {GOOGLE_MAPS_PROVIDERS,LazyMapsAPILoaderConfig} from 'angular2-google-maps/core'; 

bootstrap(AppComponent,[GOOGLE_MAPS_PROVIDERS],provide(LazyMapsAPILoaderConfig,{
useFactory:()=>{
    let config=new LazyMapsAPILoaderConfig();
    config.apiKey="AIzaSyCN8k9JNzct9wajoOoplow8Rpu9TyLp7Uc";
    return config;
}
}));