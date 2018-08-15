import { Injectable } from '@angular/core';

/*
  Generated class for the EstabelecimentosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstabelecimentosProvider {
  private estabelecimentos = [
    {
      nome: 'Estabelecimento 1',
      nota: 5,
      url: '',
      lat: -20.336141,
      lng: -40.289168
    },
    {
      nome: 'Estabelecimento 2',
      nota: 4,
      url: '',
      lat: -20.337041,
      lng: -40.300168
    },
    {
      nome: 'Estabelecimento 3',
      nota: 3,
      url: '',
      lat: -20.336920,
      lng: -40.295921
    },
    {
      nome: 'Estabelecimento 4',
      nota: 5,
      url: '',
      lat: -20.336990,
      lng: -40.294485
    }
  ];
  constructor() {
    console.log('Hello EstabelecimentosProvider Provider');
  }

  public getEstabelecimentos() {
    return this.estabelecimentos;
  }

}
