import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';
import { Articulo } from './Articulo';
import { Cliente } from './Cliente';

export class Venta {
  public articulos: Array<Articulo>;
  constructor(
    public id: number,
    public cliente_id: number,
    public cliente: Cliente,
    public total: number,
    public fecha: string
  ) {
    this.articulos = new Array<Articulo>();
  }
}
