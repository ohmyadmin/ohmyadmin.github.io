import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {BaselineAvailabilityComponent, BrowserKey} from './baseline-availability.component';
import {ComponentRef} from '@angular/core';

describe('BaselineAvailabilityComponent', () => {
  let component: BaselineAvailabilityComponent;
  let componentRef: ComponentRef<BaselineAvailabilityComponent>;
  let fixture: ComponentFixture<BaselineAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaselineAvailabilityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BaselineAvailabilityComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should categorize all browsers as unsupported by default', () => {
    // Using bracket notation allows access to protected members in tests
    // without losing type safety or using 'any'
    const groups = component['groups']();

    expect(groups.supported).toHaveLength(0);
    expect(groups.unsupported).toHaveLength(4);

    const ids = groups.unsupported.map(b => b.id);
    expect(ids).toContain('chrome');
    expect(ids).toContain('edge');
    expect(ids).toContain('firefox');
    expect(ids).toContain('safari');
  });

  it('should correctly categorize supported and unsupported browsers', () => {
    const supported: BrowserKey[] = ['chrome', 'firefox'];
    componentRef.setInput('supported', supported);
    fixture.detectChanges();

    const groups = component['groups']();

    expect(groups.supported.map(b => b.id)).toEqual(['chrome', 'firefox']);
    expect(groups.unsupported.map(b => b.id)).toEqual(['edge', 'safari']);
  });

  it('should handle all browsers being supported', () => {
    const allBrowsers: BrowserKey[] = ['chrome', 'edge', 'firefox', 'safari'];
    componentRef.setInput('supported', allBrowsers);
    fixture.detectChanges();

    const groups = component['groups']();
    expect(groups.supported).toHaveLength(4);
    expect(groups.unsupported).toHaveLength(0);
  });

  it('should render the correct number of groups in the DOM', () => {
    componentRef.setInput('supported', ['chrome']);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const supportedGroup = compiled.querySelector('.supported.group');
    const unsupportedGroup = compiled.querySelector('.unsupported.group');

    expect(supportedGroup).not.toBeNull();
    expect(unsupportedGroup).not.toBeNull();

    const avatarGroups = compiled.querySelectorAll('lib-avatar-group');
    expect(avatarGroups.length).toBe(4);
  });
});
