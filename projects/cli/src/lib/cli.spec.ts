import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cli } from './cli';

describe('Cli', () => {
  let component: Cli;
  let fixture: ComponentFixture<Cli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
