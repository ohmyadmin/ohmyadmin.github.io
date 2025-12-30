import { beforeEach, describe, expect, it, vi } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
    let component: AvatarComponent;
    let fixture: ComponentFixture<AvatarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AvatarComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display initials when no image url is provided', () => {
        fixture.componentRef.setInput('name', 'John Doe');
        fixture.detectChanges();

        const img = fixture.debugElement.query(By.css('img'));
        const span = fixture.debugElement.query(By.css('.text'));

        expect(img).toBeNull();
        expect(span).toBeTruthy();
        expect(span.nativeElement.textContent).toBe('JD');
    });

    it('should display image when image url is provided', () => {
        const test_url = 'https://mockmind-api.uifaces.co/content/human/1.jpg';
        fixture.componentRef.setInput('image_url', test_url);
        fixture.detectChanges();

        const img = fixture.debugElement.query(By.css('img'));
        const span = fixture.debugElement.query(By.css('.text'));

        expect(span).toBeNull();
        expect(img).toBeTruthy();
        expect(img.nativeElement.src).toBe(test_url);
    });

    it('should display initials when image fails to load', () => {
        fixture.componentRef.setInput('image_url', 'bad_url');
        fixture.componentRef.setInput('name', 'Jane Doe');
        fixture.detectChanges();

        const img = fixture.debugElement.query(By.css('img'));
        expect(img).toBeTruthy();

        img.triggerEventHandler('error', null);
        fixture.detectChanges();

        const span = fixture.debugElement.query(By.css('.text'));
        const missing_img = fixture.debugElement.query(By.css('img'));

        expect(missing_img).toBeNull();
        expect(span).toBeTruthy();
        expect(span.nativeElement.textContent).toBe('JD');
    });

    it('should call on_image_error when image fails to load', () => {
        fixture.componentRef.setInput('image_url', 'bad_url');
        fixture.detectChanges();

        const spy = vi.spyOn(component as unknown as {
            on_image_error: () => void;
        }, 'on_image_error');
        const img = fixture.debugElement.query(By.css('img'));

        img.triggerEventHandler('error', null);

        expect(spy).toHaveBeenCalled();
    });

    it('should use default name if not provided', () => {
        fixture.detectChanges();

        const span = fixture.debugElement.query(By.css('.text'));
        expect(span.nativeElement.textContent).toBe('UU');
    });

    it('should apply bordered styles when bordered is true', () => {
        fixture.componentRef.setInput('bordered', true);
        fixture.detectChanges();
        const hostElement = fixture.nativeElement;
        expect(hostElement.style.getPropertyValue('--border-style')).toBe('solid');
    });

    it('should apply size styles when size is provided', () => {
        fixture.componentRef.setInput('size', 'sm');
        fixture.detectChanges();
        const hostElement = fixture.nativeElement;
        expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-sm)');
    });

    it('should not apply size styles when size is undefined', () => {
        fixture.componentRef.setInput('size', undefined);
        fixture.detectChanges();
        const hostElement = fixture.nativeElement;
        expect(hostElement.style.getPropertyValue('--size')).toBe('');
    });

    it('should handle all input properties correctly', () => {
        fixture.componentRef.setInput('bordered', false);
        fixture.componentRef.setInput('image_url', undefined);
        fixture.componentRef.setInput('name', 'Test User');
        fixture.componentRef.setInput('size', 'lg');
        fixture.componentRef.setInput('status', 'away');

        fixture.detectChanges();

        const hostElement = fixture.nativeElement;
        expect(hostElement.getAttribute('aria-label')).toBe('Test User');
        expect(hostElement.style.getPropertyValue('--border-style')).toBe('');
        expect(hostElement.style.getPropertyValue('--size')).toBe('var(--size-lg)');

        const statusElement = fixture.debugElement.query(By.css('.status.away'));
        expect(statusElement).toBeTruthy();
    });

    it('should fully exercise css_size_variable computed signal', () => {
        // Test the 'undefined' path (Line 31: return size)
        fixture.componentRef.setInput('size', undefined);
        fixture.detectChanges();
        expect(component['css_size_variable']()).toBeUndefined();

        // Test the 'defined' path (Line 31: return `var(...)`)
        fixture.componentRef.setInput('size', 'lg');
        fixture.detectChanges();
        expect(component['css_size_variable']()).toBe('var(--size-lg)');
    });

    it('should exercise all input signal definitions', () => {
        // Explicitly setting every input ensures the signal "write" logic is covered
        fixture.componentRef.setInput('bordered', true);
        fixture.componentRef.setInput('image_url', 'http://test.com');
        fixture.componentRef.setInput('name', 'Test');
        fixture.componentRef.setInput('size', 'xl');
        fixture.componentRef.setInput('status', 'busy');
        fixture.detectChanges();

        expect(component.bordered()).toBe(true);
        expect(component.image_url()).toBe('http://test.com');
        expect(component.name()).toBe('Test');
        expect(component.size()).toBe('xl');
        expect(component.status()).toBe('busy');
    });
});
