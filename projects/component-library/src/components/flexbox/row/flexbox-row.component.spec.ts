import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {FlexboxRowComponent} from './flexbox-row.component';

describe('FlexboxRowComponent', () => {
  let component: FlexboxRowComponent;
  let fixture: ComponentFixture<FlexboxRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxRowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlexboxRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
