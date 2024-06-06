import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuturamaData } from '../models/futurama.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {
  private baseURL = "https://futuramaapi.com/api";
  private _currentPage = new BehaviorSubject<number>(1);
  currentPage = this._currentPage.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getPersonajes(page: number) {
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json'
    });

    return this.http.get<FuturamaData>(`${this.baseURL}/characters?page=${page}`, { headers });
  }

  setNewPage(page: number) {
    this._currentPage.next(page);
  }
}
