import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarBadgeWithMaskComponent} from './avatar-badge-with-mask.component';

describe('AvatarBadgeWithMaskComponent', () => {
  let component: AvatarBadgeWithMaskComponent;
  let fixture: ComponentFixture<AvatarBadgeWithMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarBadgeWithMaskComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvatarBadgeWithMaskComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
