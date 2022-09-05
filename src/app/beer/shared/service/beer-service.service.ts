import { Injectable } from '@angular/core';
import { Observable, of, map, from, filter, find } from 'rxjs';
import { BeerRecipe } from '../interface/recipe';
import { Details } from '../interface/shortDetail';
import { BEER } from '../mock/recipe';

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  constructor(

  ) {
  }

  getRecipes(): Observable<BeerRecipe[]> {
    const beers$ = of(BEER);
    return beers$;
  }

  getShortRecipes(): Observable<Details[]> {   
    const details: Details[] = [];
    
    const details$ = from(BEER).pipe(
      map(value => {
        //TODO можно ли возврат сделать аккуратнее? понять, почем value.id!
        details.push({id: value.id!, title: value.title, characterisric: value.characterisric});

        return details;
      })
    );
    return details$;
  }

  getRecipeById(id: number): Observable<BeerRecipe | undefined> {
    const recipe$ = BEER.find(value => value.id === id);

    return of(recipe$);
  }

}
