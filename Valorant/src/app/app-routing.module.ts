import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { PlayerStatsComponent } from './player-stats/player-stats.component'


const routes: Routes = [{ path: '', component: LandingPageComponent }, { path: 'Player/:Nome', component: PlayerStatsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
