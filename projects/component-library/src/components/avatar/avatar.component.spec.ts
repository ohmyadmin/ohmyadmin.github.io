import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AvatarComponent} from 'component-library';
import {describe, it, expect, beforeEach, vi} from 'vitest';

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

    const spy = vi.spyOn(component as any, 'on_image_error');
    const img = fixture.debugElement.query(By.css('img'));

    img.triggerEventHandler('error', null);

    expect(spy).toHaveBeenCalled();
  });

  it('should use default name if not provided', () => {
    fixture.detectChanges();

    const span = fixture.debugElement.query(By.css('.text'));
    expect(span.nativeElement.textContent).toBe('UU');
  });
});
