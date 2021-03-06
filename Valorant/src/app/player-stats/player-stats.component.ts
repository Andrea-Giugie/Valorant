import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Player from './Player'
import { keyframes, animate, style } from '@angular/animations'
import { GraficoComponent } from '../grafico/grafico.component';
import { MessageService } from '../MessageService'
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})


export class PlayerStatsComponent implements OnInit {
  BackEnd: string = 'http://localhost:4201/Valorant';
  NomePlayer: string;
  public player: Player = new Player();
  @Output() messageEvent = new EventEmitter<number>();
  subscription: Subscription;

  constructor(public httpClient: HttpClient, private titleService: Title, private metaTagService: Meta, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.NomePlayer = this.activatedRoute.snapshot.paramMap.get("Nome");
    this.sendGetRequest(this.BackEnd + `?player=${this.NomePlayer}`).then((player: Player) => {
      this.player = player;


      this.messageService.updateMessage(this.player.percWinrate);


    });
  }

  ngOnInit(): void {


    /*http request al mio server col nome del player*/
    this.metaTagService.updateTag({ name: 'Player', content: `${this.NomePlayer}'s Valorant statistics` });
  }
  RefreshPlayer() {
    this.sendGetRequest(this.BackEnd + `/UpdatePlayer?player=${this.NomePlayer}`).then(() => {
      window.location.reload()
    });
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
