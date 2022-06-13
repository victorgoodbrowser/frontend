import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidService } from 'src/app/core/valid/valid.service';

@Component({
  selector: 'app-avaliacao-jogo',
  templateUrl: './avaliacao-jogo.component.html',
  styleUrls: ['./avaliacao-jogo.component.css']
})
export class AvaliacaoJogoComponent implements OnInit {

  @Input() avaliacao: any
  comentario: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private validService: ValidService,
    ) { }

  ngOnInit(): void {
    this.comentario = this.avaliacao.comentario;
  }

  close() {
    this.activeModal.close(this.comentario);
  }

  adicionar() {
    this.activeModal.close(this.comentario)
  }

  validaComentario() {
    return this.comentario === ''
  }

}
