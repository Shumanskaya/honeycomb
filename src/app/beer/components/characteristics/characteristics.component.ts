import { Component, Input, OnInit } from '@angular/core';
import { Characterisric } from 'src/app/beer/shared';

@Component({
  selector: 'hc-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() public characteristic = {} as Characterisric | undefined;

  public valueCharacteristic: number[] = [];

  constructor() { }

  ngOnInit(): void {

    if (this.characteristic) {
      this.valueCharacteristic = Object.values(this.characteristic);
    }

  }

}
