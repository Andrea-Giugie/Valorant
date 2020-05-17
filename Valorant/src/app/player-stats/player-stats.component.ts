import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Player from './Player'

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})


export class PlayerStatsComponent implements OnInit {
  BackEnd: string = 'http://localhost:4201/Valorant';
  NomePlayer: string;
  public player: Player = new Player();

  constructor(public httpClient: HttpClient, private titleService: Title, private metaTagService: Meta, private activatedRoute: ActivatedRoute) {

    this.NomePlayer = this.activatedRoute.snapshot.paramMap.get("Nome");
    this.sendGetRequest(this.BackEnd + `?player=${this.NomePlayer}`).then((player: Player) => {
      this.player = player;

    });
  }


  ngOnInit(): void {


    /*http request al mio server col nome del player*/
    this.metaTagService.updateTag({ name: 'Player', content: `${this.NomePlayer}'s Valorant statistics` });
  }

  sendGetRequest(url: string): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          resolve({ "error": 1 });
        });
    });

  }

}
