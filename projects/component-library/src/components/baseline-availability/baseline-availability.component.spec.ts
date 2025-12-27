import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {BaselineAvailabilityComponent} from 'component-library';

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
