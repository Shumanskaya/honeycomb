import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../../shared/interface/shortDetail';

@Component({
  selector: 'hc-short-details',
  templateUrl: './short-details.component.html',
  styleUrls: ['./short-details.component.scss']
})
export class ShortDetailsComponent implements OnInit {

  @Input()
  public details: Array<Details> = [];

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
