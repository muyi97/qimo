import { Injectable } from '@angular/core';
import { Constellation } from './constellation';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  // private imgurl = 'http://127.0.0.1:2403/imgs';
  private dataurl = 'http://127.0.0.1:2403/yang';
  constructor(
    private httpClient: HttpClient,
  ) { }

  getConstellations(): Observable<Constellation[]> {
    return this.httpClient.get<Constellation[]>(this.dataurl);
  }

  getConstellationById(id: string): Observable<Constellation> {
    return this.httpClient.get<Constellation>(`${this.dataurl}/${id}`);
  }

  // getConstellationImgsPath(): Observable<Constellation[]> {
  //   return this.httpClient.get<Constellation[]>(this.imgurl);
  // }

  // getConstellationByImgPath(path: string): Observable<Constellation> {
  //   return this.httpClient.get<Constellation>(`${this.imgurl}/${path}`);
  // }
}
