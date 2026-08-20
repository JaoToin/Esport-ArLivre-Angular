import { Routes } from '@angular/router';
import { CorridaComponent } from './app/component/corrida/corrida-component/corrida-component';
import { Home} from './app/component/home/home';
import { AtletaComponent } from './app/component/Atleta/atleta-component/atleta-component';
import { AtletaListaComponent } from './app/component/Atleta/atleta-lista-component/atleta-lista-component';
import { TabelaComponent } from './app/component/corrida/tabela-component/tabela-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"cadastroatleta",
        component:AtletaComponent
    },
    {
        path:"cadastroatleta/:id",
        component:AtletaComponent
    },
    {
        path:"listaatleta",
        component:AtletaListaComponent
    },
    {
        path:"cadastrocorrida",
        component:CorridaComponent
    },

    {
      path:"cadastroTabela",
      component:TabelaComponent
  },



  ]
