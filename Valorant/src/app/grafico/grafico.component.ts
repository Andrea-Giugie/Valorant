import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ChartType, ChartColor } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { MessageService } from '../MessageService'
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Win', 'Lost'];
  public doughnutChartData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors = [
    { backgroundColor: ["#FF4657", "#437FD2"] }
  ];


  constructor(private messageService: MessageService) {

    messageService.getMessage().subscribe(winrate => {
      this.doughnutChartData = [[winrate, 100 - winrate]];

    })
  }




  ngOnInit(): void {
  }


}
