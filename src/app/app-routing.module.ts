import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stages',
    component: StagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
