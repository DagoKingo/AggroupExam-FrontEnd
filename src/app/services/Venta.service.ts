import { HttpClient } from '@angular/common/http';
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

  getVentas(): Observable<any> {
    return this._httpClient.get(this.url + '/ventas');
  }
}
