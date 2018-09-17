import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
//import leaflet from 'leaflet';
//import 'leaflet-routing-machine';

import { EstabelecimentosProvider } from '../../providers/estabelecimentos';


declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
  providers: [
    TabsPage,
  ]
})
export class MapaPage {
  @ViewChild('map') mapElement: ElementRef;
  //tileLayer = 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  public options: GeolocationOptions;
  public currentPos: Geoposition;
  public map: any;
  public places: Array<any>;

  //private estabelecimentos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tab: TabsPage,
    private geolocation: Geolocation,
    private estabelecimentosProviders: EstabelecimentosProvider
  ) { }

  ionViewDidLoad() {
    // this.estabelecimentos = this.estabelecimentosProviders.getEstabelecimentos();
    //this.initMap();
  }
  /*
    private initMap() {
      setTimeout(() => {
        this.map = leaflet.map('map').setView([-20.33433759,-40.2849475], 14);
        leaflet.tileLayer(this.tileLayer, {
          maxZoom: 18
        }).addTo(this.map);
        this.setMarkers();
      }, 300);
    }*/

  ionViewDidEnter() {
    this.getUserPosition();
    console.log('this.getUserPosition();', this.getUserPosition());
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;

      // console.log(pos);
      this.addMap(pos.coords.latitude, pos.coords.longitude);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      fullscreenControl: true,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.getRestaurants(latLng).then((results: Array<any>) => {
          this.places = results;
          // console.log('this.places', this.places);
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }, (status) => console.log(status));

    this.addMarker();

  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
		});
		
    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    // google.maps.event.addListener(marker, 'click', () => {
    //   infoWindow.open(this.map, marker);
		// });
		
		marker.addListener('click', () => {
			infoWindow.open(this.map, marker);
		});

  }

    getRestaurants(latLng) {
      var service = new google.maps.places.PlacesService(this.map);
      // console.log('servicemap', service);
      let request = {
        location: latLng,
        radius: 8047,
        types: ["restaurant"]
      };
      return new Promise((resolve, reject) => {
        service.nearbySearch(request, function (results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            resolve(results);
          } else {
            reject(status);
          }

        });
      });
    }


  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
		});

		// let content = "<p><strong>"+place.name+"</strong></p>"+
		// 							"<p>Rating:"+place.rating+"</p>"+
		// 							"";
		
		let content = "<div style='float:left'><img src='"+place.icon+"'></div>"+
		"<div style='float:right; padding: 10px;'><strong>"+place.name+"</strong><br/>"+
		"<p><strong>Rating: </strong>"+place.rating+"</p></div>";

    let infoWindow = new google.maps.InfoWindow({
      content: content
		});
		
		marker.addListener('click', () => {
			infoWindow.open(this.map, marker);
		});
  }

  /*

  setMarkers() {
    let self = this;
    let i = 0;
    for (let estabelecimento of this.estabelecimentos) {
      let marker = leaflet.marker([estabelecimento.lat, estabelecimento.lng]);
      marker.addTo(self.map);
      marker.bindPopup(self.getPopUp(i));
      i++;
    }

  }

  private getPopUp(i) {
    // setTimeout(()=> {
    let test = document.getElementById('waypoint-' + i);
    console.log('POPUP', test);
    return test;
    // }, 200);
  }
*/
}
