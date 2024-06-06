import { Component, OnInit } from '@angular/core';
import { BackendServicesService } from '../../services/backend-services.service';
import { FuturamaData } from '../../models/futurama.model';
import { PersonajeComponent } from '../personaje/personaje.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listapersonajes',
  standalone: true,
  imports: [PersonajeComponent, MatButtonModule],
  templateUrl: './listapersonajes.component.html',
  styleUrl: './listapersonajes.component.scss'
})
export class ListapersonajesComponent implements OnInit {
  dataPersonajes: FuturamaData = new FuturamaData();
  currPage = 1;
  lastPage = 0;

  constructor (
    private dataShare: BackendServicesService
  ) {}

  ngOnInit(): void {
      this.dataShare.currentPage.subscribe(p => {
        this.currPage = p;
        this.dataShare.getPersonajes(p).subscribe (data => {
          this.dataPersonajes = data;
          this.lastPage = data.pages;
        });
      });
  }

  prevPage() {
    if (this.currPage > 1) {
      this.dataShare.setNewPage(this.currPage - 1);
    }
  }

  nextPage() {
    if (this.currPage < this.lastPage) {
      this.dataShare.setNewPage(this.currPage + 1);
    }
  }
}
