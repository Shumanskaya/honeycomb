import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface Coord {
  [key: string]: number;
}

@Component({
  selector: 'hc-honeycombs',
  templateUrl: './honeycombs.component.html',
  styleUrls: ['./honeycombs.component.scss']
})


export class HoneycombsComponent implements AfterViewInit {

  @ViewChild('svgElement', { static: false })
  public svg: ElementRef | undefined;

  public svgWidth: number;

  public svgHeight: number;

  public widthHoneyComb: number = 120;

  public heightHoneyComb: number = 110;

  public coordinats: Array<Coord> = [];

  public paths: Array<string> = [];

  constructor() {

  }

  ngAfterViewInit(): void {
    this.svgWidth = this.svg?.nativeElement.clientWidth;
    this.svgHeight = this.svg?.nativeElement.clientHeight;

    setTimeout(() => {
      this.printAllHoneyCombs();
      this.drawHoneyComb();
    }, 100)

  }

  public drawHoneyComb() {
    this.coordinats.forEach((coord, index) => {
      this.paths[index] = `m${coord.x} ${coord.y + 55} l 30 -55 60 0 30 55 -30 55 -60 0`;
    })
  }

  public printAllHoneyCombs() {
    const maxHorizontalHoney = Math.floor(this.svgWidth / this.widthHoneyComb);
    const maxVerticalHoney = Math.round(this.svgHeight / this.heightHoneyComb); 

    const stepX = 100;
    const stepY = 120;

    let startPositionX = this.svgWidth - stepX;
    let startPositionY = 0;
    let positionXForEnd: number;
    let positionYForEnd: number;

    for (let i = 0; i < maxHorizontalHoney; i++) {
      if (i > 0) {
        startPositionX -= stepX;
      }

      startPositionY = i % 2 === 0 ? 0 : startPositionY = 0 - stepY/2;

      for (let k = 0; k < maxVerticalHoney; k++) {
        let obj: Coord = {x: startPositionX, y: startPositionY};

        startPositionY += stepY;

        this.coordinats.push(obj);
      }

    }

    positionXForEnd = Math.round(startPositionX / this.widthHoneyComb);
    positionYForEnd = startPositionY - ((stepY/2) * 5);

    for (let j = 0; j < positionXForEnd; j++) {
      startPositionX -= stepX;

      startPositionY = j % 2 === 0 ? positionYForEnd : startPositionY = positionYForEnd - stepY/2;


      for (let k = 0; k < 3; k++) {
        let obj: Coord = {x: startPositionX, y: startPositionY};

        startPositionY += stepY;

        this.coordinats.push(obj);
      }

    }

  }

  // public setLeftHoneyCombCoord(): Array<Coord> {
  //   const coordinats: Array<Coord> = [];
  //   let positionX = 105;
  //   let positionY = 60;

  //   for (let i = 1; i < 9; i++) {
  //     let obj = { x: positionX, y: positionY };
  //     switch (i) {
  //       case 1:
  //       case 3:
  //       case 5:
  //       case 7:
  //         positionX = positionX;
  //         positionY += 115;
  //         break;
  //       case 2:
  //         positionX += 95;
  //         positionY += -170;
  //         break;
  //       case 4:
  //         positionX += 95;
  //         positionY += 60;
  //         break;
  //       case 6:
  //         positionX += 95;
  //         positionY += -60;
  //         break;
  //     }
  //     coordinats.push(obj);
  //   }

  //   return coordinats;
  // }

  // public setBottomHoneyCombCoord(): Array<Coord> {
  //   let positionX = this.svgWidth / 3;
  //   let positionY = this.svgHeight - 55;
  //   let newCoord: Array<Coord> = [];
  //   const stepX = 90;
  //   const stepY = 70;

  //   const coordinats: Array<Coord> = [
  //     { x: 10, y: 450 },
  //     { x: 150, y: 450 },
  //     { x: 220, y: 400 },
  //     { x: 290, y: 450 },
  //     { x: 360, y: 400 },
  //     { x: 430, y: 350 },
  //     //следующий край
  //     { x: 1230, y: 400 },
  //     { x: 1300, y: 350 },
  //     { x: 1370, y: 400 },
  //   ]

  //   for (let i = 1; i < 10; i++) {
  //     let obj = { x: positionX, y: positionY };
  //     switch (i) {
  //       case 1:
  //         positionX += stepX * 2;
  //         break;
  //       case 2:
  //         positionX += stepX;
  //         positionY -= stepY;
  //         break;
  //       case 3:
  //         positionX += stepX;
  //         positionY += stepY;
  //         break;
  //       case 4:
  //         positionX += stepX;
  //         positionY -= stepY;
  //         break;
  //       case 5:
  //         positionX += stepX;
  //         positionY -= stepY;
  //         break;
  //       case 6:
  //         positionX = this.svgWidth - 120;
  //         positionY += stepY;
  //         break;
  //       case 7:
  //         positionX -= stepX;
  //         positionY -= stepY;
  //         break;
  //       case 8: {
  //         positionX -= stepX;
  //         positionY += stepY;
  //       }  

  //     }
  //     newCoord.push(obj);
  //   }

  //   return newCoord;
  // }

}
