import { Injectable } from '@angular/core';
import { Cliente } from '../Models/Cliente';
import { Venta } from '../Models/Venta';

@Injectable()
export class VentaService {
  constructor() {}

  getVentas(page: number): Array<Venta> {
    const ventas: Array<Venta> = new Array<Venta>();
    ventas.push(
      new Venta(1, 1, new Cliente('Juan', 'Perez'), 100, '20-09-2021'),
      new Venta(2, 2, new Cliente('Carlos', 'Ramirez'), 300, '21-09-2021'),
      new Venta(3, 3, new Cliente('Diego', 'Mendez'), 300, '21-09-2021')
    );
    return ventas;
  }
}
