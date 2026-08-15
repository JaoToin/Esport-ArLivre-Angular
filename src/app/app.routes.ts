import { Routes } from '@angular/router';
import { CadastroCorrida } from './component/cadastro-corrida/cadastro-corrida';
import { Home } from './component/home/home';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { Component } from '../../node_modules/@angular/compiler/types/compiler';

export const routes: Routes = [
  {
    path:'',
    redirectTo:"/home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: Home
  },

  {
    path: "cadastroAtleta",
    component: AtletaComponent
  },

  {
    path: "cadastroCorrida",
    component: CadastroCorrida
  }


];
