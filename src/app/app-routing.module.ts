import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasMaisAvaliadasComponent } from './components/categorias-mais-avaliadas/categorias-mais-avaliadas.component';
import { MembrosMaisAvaliaramComponent } from './components/membros-mais-avaliaram/membros-mais-avaliaram.component';
import { PerfilDadosComponent } from './components/perfil-dados/perfil-dados.component';
import { RelatorioMelhorAvaliacaoComponent } from './components/relatorio-melhor-avaliacao/relatorio-melhor-avaliacao.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AtualizarPerfilComponent } from './pages/atualizar-perfil/atualizar-perfil.component';
import { CadastrarJogosComponent } from './pages/cadastrar-jogos/cadastrar-jogos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { JogosMaisAvaliadosComponent } from './pages/jogos-mais-avaliados/jogos-mais-avaliados.component';
import { ListarCategoriasComponent } from './pages/listar-categorias/listar-categorias.component';
import { ListarJogosRecomendadosComponent } from './pages/listar-jogos-recomendados/listar-jogos-recomendados.component';
import { ListarJogosComponent } from './pages/listar-jogos/listar-jogos.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { VerAvaliacoesComponent } from './pages/ver-avaliacoes/ver-avaliacoes.component';
import { VerRelatoriosComponent } from './pages/ver-relatorios/ver-relatorios.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },

  { path: "", component: PaginaInicialComponent, canActivate: [AuthGuard], children: [
    { path: "perfil-update", component: AtualizarPerfilComponent, canActivate: [AuthGuard] },
    { path: "", component: PerfilDadosComponent, canActivate: [AuthGuard] },
    { path: "jogo-create", component: CadastrarJogosComponent, canActivate: [AuthGuard] },
    { path: "jogo-read", component: ListarJogosComponent, canActivate: [AuthGuard] },
    { path: "jogo-read-recommend", component: ListarJogosRecomendadosComponent, canActivate: [AuthGuard] },
    { path: "categoria-read", component: ListarCategoriasComponent, canActivate: [AuthGuard] },
    { path: "relatorio", component: VerRelatoriosComponent, canActivate: [AuthGuard], children: [
      { path: "jogos-mais-avaliados", component: JogosMaisAvaliadosComponent, canActivate: [AuthGuard] },
      { path: "jogos-melhores-avaliados", component: RelatorioMelhorAvaliacaoComponent, canActivate: [AuthGuard] },
      { path: "categorias-melhores-avaliadas", component: CategoriasMaisAvaliadasComponent, canActivate: [AuthGuard] },
      { path: "membros-mais-avaliaram", component: MembrosMaisAvaliaramComponent, canActivate: [AuthGuard] },
    ] },
    { path: "avaliacao/:id", component: VerAvaliacoesComponent, canActivate: [AuthGuard] },
    { path: "jogos-mais-avaliados", component: JogosMaisAvaliadosComponent, canActivate: [AuthGuard] },
  ] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
