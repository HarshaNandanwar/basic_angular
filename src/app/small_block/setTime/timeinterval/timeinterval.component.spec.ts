import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeintervalComponent } from './timeinterval.component';

describe('TimeintervalComponent', () => {
  let component: TimeintervalComponent;
  let fixture: ComponentFixture<TimeintervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeintervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
