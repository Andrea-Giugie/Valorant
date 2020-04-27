import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  NomePlayer: string;

  constructor(private titleService: Title, private metaTagService: Meta, private activatedRoute: ActivatedRoute) {
    this.NomePlayer = this.activatedRoute.snapshot.paramMap.get("Nome");
  }

  ngOnInit(): void {


    this.metaTagService.updateTag({ name: 'Player', content: `${this.NomePlayer} statistics` });
  }

}
