import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPreview } from './component-preview';

describe('ComponentPreview', () => {
  let component: ComponentPreview;
  let fixture: ComponentFixture<ComponentPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
