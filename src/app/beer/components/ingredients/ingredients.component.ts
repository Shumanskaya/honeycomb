import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from '../../pages/beer/recipe/interface/ingredients';

@Component({
  selector: 'hc-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients: Ingredients[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
