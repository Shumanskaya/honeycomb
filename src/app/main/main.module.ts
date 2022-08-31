import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { HoneycombsComponent } from './components';
import { BeeComponent } from './components';
import { HoneyHoverDirective } from './shared/honeyHover';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [MainComponent, HoneycombsComponent, BeeComponent, HoneyHoverDirective],
  exports: [HoneyHoverDirective],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
