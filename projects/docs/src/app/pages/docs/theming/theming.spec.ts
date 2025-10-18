import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theming } from './theming';

describe('Theming', () => {
  let component: Theming;
  let fixture: ComponentFixture<Theming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theming],
    }).compileComponents();

    fixture = TestBed.createComponent(Theming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
