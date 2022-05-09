import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatchPageComponent } from './components/match-page/match-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "matches", component: MatchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
