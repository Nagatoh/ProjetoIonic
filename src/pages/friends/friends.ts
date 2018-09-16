import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
import { ChatPage } from './chat/chat';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  private alert: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastService: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

  chat(index) {
    console.log('Navigate!');
    this.navCtrl.push(ChatPage, {
      index: index
    });
  }

  addFriend() {
    this.alert = this.alertCtrl.create({
      title:'Adicionar um amigo',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'email@email.com',
          id: 'email'
        }
      ],
      buttons: [
        {
          text: 'cancel',
          role: 'cancel'
        },
        {
          text: 'Adicionar',
          handler: () => {
            this.toastService.showToastAlert('Seu pedido de amizade foi enviado!');
          }
        }
      ]
    });
    this.alert.present();
  }

}
