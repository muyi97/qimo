import { Injectable } from '@angular/core';
import { Constellation } from './constellation';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  url = 'http://127.0.0.1:2403/yang';
  constructor(
    private httpClient: HttpClient
  ) { }

  getConstellations(): Observable<Constellation[]> {
    return this.httpClient.get<Constellation[]>(this.url);
  }

  getConstellationById(id: string): Observable<Constellation> {
    return this.httpClient.get<Constellation>(`${this.url}/${id}`);
  }

  updateConstellation(): Observable<Constellation> {
    return this.httpClient.put<Constellation>(this.url, Constellation);
  }
}
