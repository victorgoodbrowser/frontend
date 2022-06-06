import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-relatorios',
  templateUrl: './ver-relatorios.component.html',
  styleUrls: ['./ver-relatorios.component.css']
})
export class VerRelatoriosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active(id: any) {
    var jogosmelhoresmedias = document.getElementById('jogos-melhores-medias');
    var jogosmaisavaliados = document.getElementById('jogos-mais-avaliados');
    var categoria = document.getElementById('categoria');
    var membros = document.getElementById('membros');
    //var aux: any[] = element?.className.split(" ")
    switch (id) {
      case 'jogos-melhores-medias':
        jogosmelhoresmedias?.classList.add('btn-dark');
        jogosmelhoresmedias?.classList.remove("btn-light");

        jogosmaisavaliados?.classList.remove('btn-dark');
        categoria?.classList.remove('btn-dark');
        membros?.classList.remove('btn-dark');
        break;
      case 'jogos-mais-avaliados':
        jogosmelhoresmedias?.classList.remove('btn-dark');

        jogosmaisavaliados?.classList.add('btn-dark');
        jogosmaisavaliados?.classList.remove("btn-light");

        categoria?.classList.remove('btn-dark');
        membros?.classList.remove('btn-dark');
        break;
      case 'categoria':
        jogosmelhoresmedias?.classList.remove('btn-dark');
        jogosmaisavaliados?.classList.remove('btn-dark');

        categoria?.classList.add('btn-dark');
        categoria?.classList.remove("btn-light");

        membros?.classList.remove('btn-dark');
        break;
      case 'membros':
        jogosmelhoresmedias?.classList.remove('btn-dark');
        jogosmaisavaliados?.classList.remove('btn-dark');
        categoria?.classList.remove('btn-dark');

        membros?.classList.add('btn-dark');
        membros?.classList.remove("btn-light");
        break;
      default:
        break;
    }
    /* if (aux.indexOf("btn-light") > -1 &&
      aux.indexOf(" ") > -1) {
      element.classList.remove("btn-dark");
      element.classList.remove("btn-light");
      element.classList.remove(" ");
    } else {
      element.classList.add("btn-dark");
    } */
  }

}
