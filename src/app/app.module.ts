import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchPageComponent } from './components/match-page/match-page.component';
import { AddMatchComponent } from './components/add-match/add-match.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddPlayerComponent,
    MatchPageComponent,
    AddMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
