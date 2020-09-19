import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTComponent } from './maintenance-t.component';

describe('MaintenanceTComponent', () => {
  let component: MaintenanceTComponent;
  let fixture: ComponentFixture<MaintenanceTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
