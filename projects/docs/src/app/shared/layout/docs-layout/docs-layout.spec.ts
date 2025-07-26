import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsLayout } from './docs-layout';

describe('DocsLayout', () => {
  let component: DocsLayout;
  let fixture: ComponentFixture<DocsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
