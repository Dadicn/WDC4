import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { StratComponent } from './strat/strat.component';
import { UxuiComponent } from './uxui/uxui.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stages',
    component: StagesComponent
  },
  {
    path: 'strat',
    component: StratComponent
  },
  {
    path: 'uxui',
    component: UxuiComponent
  },
  {path: 'contact',
  component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
