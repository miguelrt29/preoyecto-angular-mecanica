import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gris } from './gris';

describe('Gris', () => {
  let component: Gris;
  let fixture: ComponentFixture<Gris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gris);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
