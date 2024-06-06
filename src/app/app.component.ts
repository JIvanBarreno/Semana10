import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListapersonajesComponent } from './components/listapersonajes/listapersonajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListapersonajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab10_REST_API';
}
