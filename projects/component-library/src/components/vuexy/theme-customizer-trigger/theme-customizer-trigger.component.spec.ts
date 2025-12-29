import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeCustomizerTriggerComponent } from './theme-customizer-trigger.component';
import {describe, it, expect, beforeEach, beforeAll} from 'vitest';
import {BrowserTestingModule, platformBrowserTesting} from '@angular/platform-browser/testing';

// describe('ThemeCustomizerTrigger', () => {
//   let component: ThemeCustomizerTriggerComponent;
//   let fixture: ComponentFixture<ThemeCustomizerTriggerComponent>;
//
//   beforeAll(() => {
//     // Check if the environment is already initialized to avoid "cannot override" errors
//     if (!(TestBed as any)._instantiated) {
//       TestBed.initTestEnvironment(
//         BrowserTestingModule,
//         platformBrowserTesting()
//       );
//     }
//   });
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ThemeCustomizerTriggerComponent]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(ThemeCustomizerTriggerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
