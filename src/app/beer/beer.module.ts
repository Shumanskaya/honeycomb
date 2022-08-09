import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from './pages/beer/beer.component';
import { BeerRoutingModule } from './beer-routing.module';
import { RecipeComponent } from './pages/beer/recipe/recipe.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ImageComponent } from './components/image/image.component';
import { MainComponent } from './pages/main/main.component';
import { HoneycombsComponent } from './pages/main/honeycombs/honeycombs.component';
import { HoneyHoverDirective } from '../directives/honeyHover';
import { BeeComponent } from './pages/main/bee/bee.component';

@NgModule({
  declarations: [BeerComponent, RecipeComponent, CharacteristicsComponent, IngredientsComponent, ImageComponent, MainComponent, HoneycombsComponent, HoneyHoverDirective, BeeComponent],
  imports: [
    CommonModule,
    BeerRoutingModule
  ]
})
export class BeerModule { }
