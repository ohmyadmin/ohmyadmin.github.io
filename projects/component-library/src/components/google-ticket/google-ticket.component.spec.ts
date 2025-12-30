import {describe, it, expect, beforeEach} from 'vitest';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GoogleTicketComponent} from './google-ticket.component';

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
