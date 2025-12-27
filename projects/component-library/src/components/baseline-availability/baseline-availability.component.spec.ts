import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineAvailabilityComponent } from './baseline-availability.component';

describe('BaselineAvailabilityComponent', () => {
  let component: BaselineAvailabilityComponent;
  let fixture: ComponentFixture<BaselineAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaselineAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineAvailabilityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
