import {Component,OnInit} from '@angular/core';

import {GeolocationService} from '../shared/geolocation.service';
@Component({
    selector:'map',
styleUrls:['app/map/map.component.css'],
templateUrl:'app/map/map.component.html',

providers:[GeolocationService]
    
})

export /**
 * MapComponent
 */
class MapComponent implements OnInit  {
    public lat:number=51.678418;
    public lng:number=7.809007;
    public markers:any[];

    constructor(public service:GeolocationService) {
       
    }

    public ngOnInit():void{
        this.service.getLocation({enableHighAccuracy:false}).subscribe(a=>{
           console.log(a)
           this.lat=a.coords.latitude;
           this.lng=a.coords.longitude;
       },d=>{
           console.log(d);
       });
       this.markers=[];
    }

    public addRandomGpsPoint():void{
        console.log('adding some random');
        let lat=this.rand(this.lat-1,this.lat+1,0.01);
        let longitude=this.rand(this.lng-1,this.lng+1,0.01);
        this.markers.push({lat:lat,lng:longitude,title:'Title',label:'A'});

    }

    private rand(min:any,max:any,interval:any):any{
        if (typeof(interval)==='undefined') interval = 1;
    var r = Math.floor(Math.random()*(max-min+interval)/interval);
    return r*interval+min;
    }

    


}