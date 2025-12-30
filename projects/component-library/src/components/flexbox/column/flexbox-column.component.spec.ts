import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {FlexboxColumnComponent} from './flexbox-column.component';

describe('RowComponent', () => {
    let component: FlexboxColumnComponent;
    let fixture: ComponentFixture<FlexboxColumnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexboxColumnComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FlexboxColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
