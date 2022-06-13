import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-jogos-mais-avaliados',
  templateUrl: './jogos-mais-avaliados.component.html',
  styleUrls: ['./jogos-mais-avaliados.component.css']
})
export class JogosMaisAvaliadosComponent implements OnInit {

  listaJogos: any = [];

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }

  getListaJogos() {
    this.jogoService.buscarQtdAvaliacao().subscribe(
      (result) => {
        console.log(result);  
        this.listaJogos = result;      
      }, (error) => {
        console.log(error);        
      }
    )
  }


}
