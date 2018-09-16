import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  perfilRoot = 'PerfilPage';
  mapaRoot = 'MapaPage';
  configRoot = 'ConfigPage';
  homeRoot = 'HomePage';


  constructor(public navCtrl: NavController, public event: Events) {
    event.subscribe('logout', () => {
      this.navCtrl.setRoot(LoginPage);
      event.unsubscribe('logout');
    });

  }

}
