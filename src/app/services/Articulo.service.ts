import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../Models/Articulo';
import { Global } from '../services/global';

@Injectable()
export class ArticuloService {
  private url: string;
  constructor(private _httpClient: HttpClient) {
    this.url = Global._apiURL;
  }

  public getArticulos(): Observable<any> {
    return this._httpClient.get(this.url + '/articulos');
  }
}
