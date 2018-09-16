import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private amigoName: any;
  private newMessage = '';
  private messages = [
    {
      user: 1,
      message: 'Olá'
    },
    {
      user: 1,
      message: 'Tudo bem?'
    },
    {
      user: 2,
      message: 'Tudo Ótimo!'
    },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amigoName = this.navParams.get('index');
    if (this.amigoName === 1) {
      this.messages.push(    {
            user: 1,
            message: 'Que bom! Bem-vindo ao HOA!'
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  baloonClass(message) {
    switch (message.user) {
      case 1: return 'baloon left';
      case 2: return 'baloon right';
    }
  }

  orientationClass(message) {
    switch (message.user) {
      case 1: return 'chat-line-left';
      case 2: return 'chat-line-right';
    }
  }

  sendMessage() {
    this.messages.push({
      user: 2,
      message: this.newMessage
    });
    this.newMessage = '';
  }

}
