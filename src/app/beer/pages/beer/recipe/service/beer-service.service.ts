import { Injectable } from '@angular/core';
import { Characterisric } from '../interface/characteristic';
import { Ingredients } from '../interface/ingredients';
import { BeerRecipe } from '../interface/recipe';
import { beer } from '../mock/recipe';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  public recipes: Array<BeerRecipe> = [];

  public characteristics: Array<Characterisric> = [];

  public ingredients: Array<Ingredients> = [];

  constructor(

  ) {
  }

  getAllBeerRecipe(): BeerRecipe[] {
    beer.beers.forEach(recipe => {
      this.recipes.push(recipe);
    })

    return this.recipes;
  }

  getAllCharacteristic(): Characterisric[] {
    beer.beers.forEach(characteristic => {
      this.characteristics.push(characteristic.characterisric);
    })

    return this.characteristics;
  }

  getAllIngredients(): Ingredients[] {
    beer.beers.forEach(ingredients => {
      this.ingredients.push(ingredients.ingredients);
    })

    return this.ingredients;
  }

  getRecipeById(id: number) {
    return beer.beers[id];
  }

  getCharacteristicByID(id: number): Characterisric {
    return beer.beers[id].characterisric;
  }

  getIngredientsByID(id: number): Ingredients {
    return beer.beers[id].ingredients;
  }

  //TODO временная проверка совместимости id
  checkId(routeId: number): Boolean {
    return routeId > beer.beers.length ? false : true;
  }

}
