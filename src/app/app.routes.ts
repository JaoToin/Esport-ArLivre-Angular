import { Routes } from '@angular/router';

import { Home } from './component/menu-component/home/home';
import { AtletaComponent } from './component/menu-component/atleta-component/atleta-component';

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
  }
];
