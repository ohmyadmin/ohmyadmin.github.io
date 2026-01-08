import { ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import { AvatarCheckboxComponent } from './avatar-checkbox.component';

describe('AvatarCheckboxComponent', () => {
  let component: AvatarCheckboxComponent;
  let fixture: ComponentFixture<AvatarCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarCheckboxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
