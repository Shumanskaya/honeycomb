import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './beer/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
  path: 'beer',
  loadChildren: () => import('./beer/beer.module').then(m => m.BeerModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
