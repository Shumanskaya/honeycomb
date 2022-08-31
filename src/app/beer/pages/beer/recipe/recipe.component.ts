import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characterisric } from './interface/characteristic';
import { Ingredients } from './interface/ingredients';
import { BeerRecipe } from './interface/recipe';
import { BeerServiceService } from './service/beer-service.service';

@Component({
  selector: 'hc-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  public recipe: BeerRecipe[] = [];

  public characteristics: Characterisric[] = [];

  public ingredients: Ingredients[] = [];

  public id: number;

  constructor(private beer: BeerServiceService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
   }

  ngOnInit(): void {

    if (this.beer.checkId(this.id)) {

      this.recipe.push(this.beer.getRecipeById(this.id));

      if (this.recipe) {
        this.characteristics.push(this.beer.getCharacteristicByID(this.id));
  
        this.ingredients.push(this.beer.getIngredientsByID(this.id));
      }
    }
    
  }

}
