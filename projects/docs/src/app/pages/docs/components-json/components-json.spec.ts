import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsJson } from './components-json';

describe('ComponentsJson', () => {
  let component: ComponentsJson;
  let fixture: ComponentFixture<ComponentsJson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsJson],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsJson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
