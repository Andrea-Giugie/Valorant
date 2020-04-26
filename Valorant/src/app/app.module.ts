import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    RicercaComponent,
    LandingPageComponent,
    PlayerStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
