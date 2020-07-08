import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { FormsModule } from '@angular/forms';
import { TopMenuSimpleComponent } from './top-menu-simple/top-menu-simple.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComponent } from './grafico/grafico.component';
import { MessageService } from './MessageService'
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    RicercaComponent,
    LandingPageComponent,
    PlayerStatsComponent,
    TopMenuSimpleComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
