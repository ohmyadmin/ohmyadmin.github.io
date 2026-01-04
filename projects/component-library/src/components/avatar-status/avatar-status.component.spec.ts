import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarStatusComponent} from './avatar-status.component';

describe('AvatarBadgeComponent', () => {
  let component: AvatarStatusComponent;
  let fixture: ComponentFixture<AvatarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvatarStatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
