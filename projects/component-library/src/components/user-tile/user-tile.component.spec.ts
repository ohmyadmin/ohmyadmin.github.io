import {beforeEach, describe, expect, it} from "vitest";
import {TestBed} from '@angular/core/testing';
import {UserTileComponent} from './user-tile.component';
import {provideRouter} from '@angular/router';

describe('UserTileComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTileComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create and display the required name', () => {
    const fixture = TestBed.createComponent(UserTileComponent);
    const component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'John Doe');

    fixture.detectChanges();

    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('John Doe');
  });

  it('should handle external links correctly', () => {
    const fixture = TestBed.createComponent(UserTileComponent);

    fixture.componentRef.setInput('name', 'Jane Doe');
    fixture.componentRef.setInput('link', 'https://example.com');

    fixture.detectChanges();

    expect((fixture.componentInstance as any).is_external_link()).toBe(true);
  });
});
