import { Component, OnInit } from '@angular/core';
import { BeerService} from '../../shared';
import { Details } from '../../shared/interface/shortDetail';

@Component({
  selector: 'hc-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public details: Details[];

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this._beerService.getShortRecipes().subscribe(value => this.details = value);
  }

}
