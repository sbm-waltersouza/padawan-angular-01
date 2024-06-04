import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioTesteComponent } from './desafio-teste.component';

describe('DesafioTesteComponent', () => {
  let component: DesafioTesteComponent;
  let fixture: ComponentFixture<DesafioTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
