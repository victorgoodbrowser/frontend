import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-jogos-mais-avaliados',
  templateUrl: './jogos-mais-avaliados.component.html',
  styleUrls: ['./jogos-mais-avaliados.component.css']
})
export class JogosMaisAvaliadosComponent implements OnInit {

  listaJogos: any = [];

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }

  getListaJogos() {
    this.utilService.listar().subscribe(
      (result) => {
        console.log(result);  
        this.listaJogos = result;      
      }, (error) => {
        console.log(error);        
      }
    )
  }


}
