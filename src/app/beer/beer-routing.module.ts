import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './pages/beer/beer.component';
import { RecipeComponent } from './pages/beer/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: BeerComponent,

  },
  {
    path: 'recipe/:id',
    component: RecipeComponent,

  },
  {
    path: '**',
    component: BeerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }