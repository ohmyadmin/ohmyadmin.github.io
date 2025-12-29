import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTileComponent } from 'component-library';

describe('UserTileComponent', () => {
    let component: UserTileComponent;
    let fixture: ComponentFixture<UserTileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserTileComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UserTileComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
