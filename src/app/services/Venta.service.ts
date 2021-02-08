import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../Models/Venta';
import { Global } from './global';

@Injectable()
export class VentaService {
  private url: string;
  constructor(private _httpClient: HttpClient) {
    this.url = Global._apiURL;
  }

  public getVentas(): Observable<any> {
    return this._httpClient.get(this.url + '/ventas');
  }

  public store(venta: Venta): Observable<any> {
    const params = JSON.stringify(venta);
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._httpClient.post(this.url + '/ventas', params, {
      headers: headers,
    });
  }
}
