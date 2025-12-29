import {TestBed} from '@angular/core/testing';
// import {describe, it, expect, beforeEach} from 'vitest';
import {SampleComponent} from './sample.component';
import { provideRouter } from '@angular/router';
import {page} from 'vitest/browser';
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
// import HomeComponent from './index.page';

// describe('SampleComponent', () => {
//   let component: SampleComponent;
//   let fixture: ComponentFixture<SampleComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SampleComponent]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(SampleComponent);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { page } from 'vitest/browser';
// // ... standard Angular testing imports
//
// test('should interact with the real page', async () => {
//   // ... setup component with TestBed
//   // Use the 'page' object for interactions and assertions.
//   // await page.getByRole('button', { name: 'TURN ON' }).click();
//   // await expect.element(page.getByRole('paragraph')).toHaveText('🔥');
// });


// class SampleTester {
//   readonly fixture = TestBed.createComponent(SampleComponent);
//   readonly root = page.elementLocator(this.fixture.nativeElement);
//   // readonly login = page.getByLabelText('Login');
//   // readonly password = page.getByLabelText('Password');
//   // readonly signIn = page.getByRole('button', {name: 'Sign in'});
//   // readonly error = page.getByText('Wrong credentials, try again');
// }
//
// describe('SampleComponent', () => {
//   let tester: SampleTester;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [provideRouter([])]
//     });
//     tester = new SampleTester();
//   });
//
//   it('should display an empty form and no error initially', async () => {
//     await expect.element(tester.root).toBeInTheDocument();
//     // await expect.element(tester.login).toHaveDisplayValue('');
//     // await expect.element(tester.password).toHaveDisplayValue('');
//     // await expect.element(tester.error).not.toBeInTheDocument();
//   });
//
//   // it('should validate', async () => {
//   //   await tester.signIn.click();
//   //   await expect.element(tester.root).toHaveTextContent('The login is required');
//   //   await expect.element(tester.root).toHaveTextContent('The password is required');
//   // });
//
//   // it('should display an error when login fails', async () => {
//   //   await tester.login.fill('john');
//   //   await tester.password.fill('wrong-password');
//   //   await tester.signIn.click();
//   //
//   //   await expect.element(tester.error).toBeVisible();
//   // });
//
//   // it('should navigate away when login succeeds', async () => {
//   //   const router = TestBed.inject(Router);
//   //   vi.spyOn(router, 'navigate');
//   //
//   //   await tester.login.fill('john');
//   //   await tester.password.fill('correct-password');
//   //   await tester.signIn.click();
//   //
//   //   expect(router.navigate).toHaveBeenCalled();
//   // });
// });


test('counter click increments the count', async () => {
  // const user = userEvent.setup();
  await render(SampleComponent)
  // const button = screen.getByRole('button', {name: /count 0/i});
  // await user.click(button);
  // expect()
  // expect(button).toHaveTextContent(/count 1/i);
});
