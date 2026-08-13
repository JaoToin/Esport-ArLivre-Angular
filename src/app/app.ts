import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu-component/menu-component';
import { AtletaComponent } from './component/menu-component/atleta-component/atleta-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, AtletaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esport_fit');
}
