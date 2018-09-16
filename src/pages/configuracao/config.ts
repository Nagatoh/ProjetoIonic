import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  private alert: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public event: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }


  logout() {
    this.event.publish('logout', Date.now());
  }

  help() {
    this.alert = this.alertCtrl.create({
      title: 'AJUDA',
      subTitle: 'texto'
    });
    this.alert.present();
  }

  about() {
    this.alert = this.alertCtrl.create({
      title: 'HOA',
      subTitle: 'texto'
    });
    this.alert.present();
  }

}
