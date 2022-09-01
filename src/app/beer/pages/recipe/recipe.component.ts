import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, Subscriber, Subscription, switchMap } from 'rxjs';
import { Characterisric } from 'src/app/beer/shared';
import { Ingredients } from 'src/app/beer/shared';
import { BeerRecipe } from 'src/app/beer/shared';
import { BeerService } from 'src/app/beer/shared';

@Component({
  selector: 'hc-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  public recipes: BeerRecipe | undefined;

  public characteristics = {} as Characterisric | undefined;

  public ingredients = {} as Ingredients | undefined;

  public id: number;

  constructor(private beer: BeerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      mergeMap((value) => {
        this.id = +value.getAll('id');

        return this.beer.getRecipeById(this.id);
      })
    ).subscribe(value => {
      if (value) {
        this.recipes = value;
        this.characteristics = value.characterisric;
        this.ingredients = value.ingredients;
      }
    });
  }

}