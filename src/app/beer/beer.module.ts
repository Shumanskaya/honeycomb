import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from './pages/beer/beer.component';
import { BeerRoutingModule } from './beer-routing.module';
import { RecipeComponent } from './pages/beer/recipe/recipe.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [BeerComponent, RecipeComponent, CharacteristicsComponent, IngredientsComponent, ImageComponent],
  imports: [
    CommonModule,
    BeerRoutingModule
  ]
})
export class BeerModule { }
