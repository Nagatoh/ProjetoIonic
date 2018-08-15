import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class PopupComponent {
  @Input('estabelecimento') estabelecimento: any;
  private score = [];
  constructor(private events:Events) {

  }

  ngOnInit() {
    for(let i = 0; i< this.estabelecimento.nota;i ++){
      this.score.push(i);
    }
  }

	getPopUp() {
		return document.getElementById('popup');
	}

  showPontoDetail(ponto) {
    // this.events.publish('showDetail', ponto);
  }

}
