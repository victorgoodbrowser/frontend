import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoJogoComponent } from './avaliacao-jogo.component';

describe('AvaliacaoJogoComponent', () => {
  let component: AvaliacaoJogoComponent;
  let fixture: ComponentFixture<AvaliacaoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
