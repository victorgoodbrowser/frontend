import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-jogos-mais-avaliados',
  templateUrl: './jogos-mais-avaliados.component.html',
  styleUrls: ['./jogos-mais-avaliados.component.css']
})
export class JogosMaisAvaliadosComponent implements OnInit {

  listaJogos: any = [];
  relatorio: boolean = true;

  constructor(private jogoService: JogoService, private router: Router) { }

  ngOnInit(): void {
    this.getListaJogos();
    this.relatorio = this.router.routerState.snapshot.toString().includes('relatorio');
    console.log(this.relatorio);
    
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }

  getListaJogos() {
    this.jogoService.buscarQtdAvaliacao().subscribe(
      (result) => {
        //console.log(result);  
        this.listaJogos = result;      
      }, (error) => {
        console.log(error);        
      }
    )
  }


}
