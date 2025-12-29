import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleTicketComponent } from 'component-library';

// describe('GoogleTicket', () => {
//   let component: GoogleTicketComponent;
//   let fixture: ComponentFixture<GoogleTicketComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [GoogleTicketComponent]
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(GoogleTicketComponent);
//     component = fixture.componentInstance;
//
//     // Add this to help visualization during browser testing
//     // const hostElement = fixture.nativeElement as HTMLElement;
//     // hostElement.style.display = 'block';
//     // hostElement.style.border = '1px solid red'; // Temporary border to see the boundaries
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//     const hostElement = fixture.nativeElement as HTMLElement;
//     console.log('hostElement', hostElement)
//   });
// });


describe('GoogleTicket', () => {
    let fixture: ComponentFixture<GoogleTicketComponent>;
    let component: GoogleTicketComponent;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [GoogleTicketComponent],
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoogleTicketComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(fixture).toMatchSnapshot();
    });
});
