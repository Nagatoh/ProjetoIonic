import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  options: GeolocationOptions;
  currentPos: Geoposition;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tab: TabsPage,
    private geolocation: Geolocation,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  ionViewDidEnter() {
    this.getUserPosition();
    console.log('this.getUserPosition();', this.getUserPosition());
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      console.log(pos);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
    });
  }

}
