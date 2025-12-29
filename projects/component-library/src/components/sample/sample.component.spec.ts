import { beforeEach, describe, expect, it } from "vitest";
import { TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SampleComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(SampleComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', async () => {
        const fixture = TestBed.createComponent(SampleComponent);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('p')?.textContent).toContain('works');
    });
});
