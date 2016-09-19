import {Component} from '@angular/core';
import {MapComponent} from './map/map.component';
 
@Component({
    selector:'ang-map',
    template:'<h2>Angular Google Map </h2>'+
    '<map></map>',
    // directives:[MapComponent]
})
export /**
 * AppComponent
 */
class AppComponent {
    constructor() {
        
    }
}