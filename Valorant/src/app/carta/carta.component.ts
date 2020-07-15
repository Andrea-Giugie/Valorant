import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  body = [{ "titolo": "Rank", "testo": "Gold2" }, { "titolo": "KDA", "testo": "1.5:1" }, { "titolo": "Kill per round", "testo": "1" }, { "titolo": "Favourite Weapon", "testo": "Vandal" }, { "titolo": "Favourite Agent", "testo": "Viper" }];
  constructor() { }

  ngOnInit(): void {
  }

}
