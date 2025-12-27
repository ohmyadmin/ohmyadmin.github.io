import { ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import { GoogleTicketComponent } from 'component-library';

describe('GoogleTicket', () => {
  let component: GoogleTicketComponent;
  let fixture: ComponentFixture<GoogleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleTicketComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
