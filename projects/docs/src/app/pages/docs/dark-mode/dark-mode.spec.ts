import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkMode } from './dark-mode';

describe('DarkMode', () => {
  let component: DarkMode;
  let fixture: ComponentFixture<DarkMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkMode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
