import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCounterComponent } from './route-counter.component';

describe('RouteCounterComponent', () => {
  let component: RouteCounterComponent;
  let fixture: ComponentFixture<RouteCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
