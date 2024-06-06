import { Component, Input } from '@angular/core';
import { PersonajeF } from '../../models/futurama.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss'
})
export class PersonajeComponent {
  @Input() personaje : PersonajeF = new PersonajeF();
}
