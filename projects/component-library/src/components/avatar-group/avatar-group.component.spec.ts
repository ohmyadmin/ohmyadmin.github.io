import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AvatarGroupComponent} from 'component-library';
import {describe, it, expect, beforeEach} from 'vitest';

describe('AvatarGroupComponent', () => {
  let component: AvatarGroupComponent;
  let fixture: ComponentFixture<AvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
