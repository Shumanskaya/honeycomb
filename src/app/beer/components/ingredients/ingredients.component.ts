import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/beer/shared';

@Component({
  selector: 'hc-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients = {} as Ingredients | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
