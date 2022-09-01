import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './pages/beer/beer.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: BeerComponent,
  },
  {
    path: 'recipe',
    component: RecipeComponent,
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent,
  },
  {
    path: '**',
    component: BeerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }