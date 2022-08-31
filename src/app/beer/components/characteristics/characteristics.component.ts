import { Component, Input, OnInit } from '@angular/core';
import { Characterisric } from '../../pages/beer/recipe/interface/characteristic';

@Component({
  selector: 'hc-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  //TODO переделать characteristic на объект
  @Input() public characteristic: Characterisric[] = [];

  public valueCharacteristic: number[] = [];

  constructor() { }

  ngOnInit(): void {

    if (this.characteristic) {
      this.characteristic.forEach(characteristc => {
        this.valueCharacteristic = Object.values(characteristc);
      })

    }

  }

}
