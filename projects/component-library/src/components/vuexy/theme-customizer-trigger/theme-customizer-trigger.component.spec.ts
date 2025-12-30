import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeCustomizerTriggerComponent } from './theme-customizer-trigger.component';
import {describe, it, expect, beforeEach, beforeAll} from 'vitest';

describe('ThemeCustomizerTrigger', () => {
  let component: ThemeCustomizerTriggerComponent;
  let fixture: ComponentFixture<ThemeCustomizerTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCustomizerTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeCustomizerTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
