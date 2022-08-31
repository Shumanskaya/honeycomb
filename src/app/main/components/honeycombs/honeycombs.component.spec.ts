import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneycombsComponent } from './honeycombs.component';

describe('HoneucombsComponent', () => {
  let component: HoneycombsComponent;
  let fixture: ComponentFixture<HoneycombsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneycombsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneycombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
