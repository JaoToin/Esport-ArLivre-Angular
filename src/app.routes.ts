import { Routes } from '@angular/router';

import { Home} from './app/component/home/home';
import { AtletaComponent } from './app/component/atleta-component/atleta-component';
import { AtletaListaComponent } from './app/component/atleta-lista-component/atleta-lista-component';

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
        component:AtletaComponent
    }]
