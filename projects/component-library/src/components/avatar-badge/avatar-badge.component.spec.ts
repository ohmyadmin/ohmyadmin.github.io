import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarBadgeComponent} from './avatar-badge.component';

describe('AvatarBadgeComponent', () => {
  let component: AvatarBadgeComponent;
  let fixture: ComponentFixture<AvatarBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarBadgeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvatarBadgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
