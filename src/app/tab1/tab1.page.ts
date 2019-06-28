import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  segmentType = 'menu';
  @ViewChild('Map') mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyB3N98fJMCJiwMPHIyuWceX4RIA58qNKQw'; /*Your API Key*/
  constructor(public zone: NgZone, public geolocation: Geolocation) {
    /*load google map script dynamically */
      // const script = document.createElement('script');
      // script.id = 'googleMap';
      // if (this.apiKey) {
      //     script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
      // } else {
      //     script.src = 'https://maps.googleapis.com/maps/api/js?key=';
      // }
      // document.head.appendChild(script);
      // /*Get Current location*/
      // this.geolocation.getCurrentPosition().then((position) =>  {
      //     this.location.lat = position.coords.latitude;
      //     this.location.lng = position.coords.longitude;
      // });
      // /*Map options*/
      // this.mapOptions = {
      //     center: this.location,
      //     zoom: 21,
      //     mapTypeControl: false
      // };
      // setTimeout(() => {
      //     this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      //     /*Marker Options*/
      //     this.markerOptions.position = this.location;
      //     this.markerOptions.map = this.map;
      //     this.markerOptions.title = 'My Location';
      //     this.marker = new google.maps.Marker(this.markerOptions);
      // }, 3000);
  }
}
