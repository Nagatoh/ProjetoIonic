import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';

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
  @ViewChild('map') mapElement;
  tileLayer = 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  public options: GeolocationOptions;
  public currentPos: Geoposition;
  private map:  any;

  private estabelecimentos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tab: TabsPage,
    private geolocation: Geolocation,
    private estabelecimentosProviders: EstabelecimentosProvider
  ) { }

  ionViewDidLoad() {
    this.estabelecimentos = this.estabelecimentosProviders.getEstabelecimentos();
    this.initMap();
  }

  private initMap() {
    setTimeout(() => {
      this.map = leaflet.map('map').setView([-20.33433759,-40.2849475], 14);
      leaflet.tileLayer(this.tileLayer, {
        maxZoom: 18
      }).addTo(this.map);
      this.setMarkers();
    }, 300);
  }

  ionViewDidEnter() {

  }

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

}
