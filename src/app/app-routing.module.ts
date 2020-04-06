import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { FactsComponent } from './facts/facts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'breeds', component: BreedComponent},
  { path: 'facts', component: FactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
