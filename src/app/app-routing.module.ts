import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main').then(m => m.MainModule)
  },
  {
    path: 'beer',
    loadChildren: () => import('./beer').then(m => m.BeerModule)
  },
  { 
    path: "**",
    loadChildren: () => import('./error').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
