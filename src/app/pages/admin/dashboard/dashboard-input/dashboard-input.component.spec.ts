import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInputComponent } from './dashboard-input.component';

describe('DashboardInputComponent', () => {
  let component: DashboardInputComponent;
  let fixture: ComponentFixture<DashboardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
