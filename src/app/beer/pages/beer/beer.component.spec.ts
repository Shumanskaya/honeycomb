import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerrComponent } from './beer.component';

describe('BerrComponent', () => {
  let component: BerrComponent;
  let fixture: ComponentFixture<BerrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
