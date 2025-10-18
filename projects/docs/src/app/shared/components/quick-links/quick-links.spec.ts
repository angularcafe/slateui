import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinks } from './quick-links';

describe('QuickLinks', () => {
  let component: QuickLinks;
  let fixture: ComponentFixture<QuickLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
