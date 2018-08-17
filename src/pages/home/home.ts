import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private searchText = '';
  private eventos = [
    {
      nome: 'Evento 1',
      estabelecimento: 'Centro de Eventos',
      confirmados: 172,
      inicio: '20:00',
      termino: '03:00',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/39099567_2272050332810961_5995044140646137856_n.jpg?_nc_cat=0&oh=c46776ea8434e0d1d5eadb3383bbe75f&oe=5C00753F'
    },
    {
      nome: 'Evento 2',
      estabelecimento: 'Centro de Eventos',
      confirmados: 201,
      inicio: '21:00',
      termino: '05:30',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/37693356_2213712378643573_3911152027538817024_n.jpg?_nc_cat=0&oh=21b90619aac785be063f9db70be718df&oe=5C0F1ACB'
    },
    {
      nome: 'Evento 3',
      estabelecimento: 'Centro de Eventos',
      confirmados: 305,
      inicio: '20:00',
      termino: '04:30',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/36632988_2181509421863869_8044974160637591552_n.jpg?_nc_cat=0&oh=f75e896d1740e511911e2d7020454505&oe=5C3B750D'
    },
    {
      nome: 'Evento 4',
      estabelecimento: 'Centro de Eventos',
      confirmados: 172,
      inicio: '22:00',
      termino: '04:00',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/37395397_2207177532630391_3244058901125005312_n.jpg?_nc_cat=0&oh=69b810e3f8809ea84ec9aa928177cbf4&oe=5C133697'
    },
    {
      nome: 'Evento 5',
      estabelecimento: 'Centro de Eventos',
      confirmados: 230,
      inicio: '21:00',
      termino: '04:30',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/37395519_2205108359503975_9115387908969201664_n.jpg?_nc_cat=0&oh=81bb93583f92cd239b56450e6ad94d05&oe=5BFCEBEF'
    },
    {
      nome: 'Evento 6',
      estabelecimento: 'Centro de Eventos',
      confirmados: 402,
      inicio: '22:00',
      termino: '04:30',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/37521596_1197001970442988_8074230846497751040_n.jpg?_nc_cat=0&oh=996665067f57b9f767e8484f76134b2a&oe=5C0D67AB'
    },
    {
      nome: 'Evento 7',
      estabelecimento: 'Centro de Eventos',
      confirmados: 203,
      inicio: '21:00',
      termino: '03:00',
      foto: 'https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/31898369_2097256390289173_63916758406266880_n.jpg?_nc_cat=0&oh=9a96bc79b2fa2a463c51dbf3fac5880d&oe=5C032E7E'
    }
];
  private eventosFiltered = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.eventosFiltered = this.eventos;
  }

  onInput(){
    this.eventosFiltered = this.eventos.filter((elem) => { return elem.nome.indexOf(this.searchText) !== -1; });
  }
}
