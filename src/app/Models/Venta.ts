import { Articulo } from './Articulo';
import { Cliente } from './Cliente';

interface detalle {
  total: number;
  iva: number;
  subtotal: number;
}

export class Venta {
  public articulos: Array<Articulo>;
  public cliente: Cliente;

  public id: number;
  public cliente_id: number;
  public total: number;
  public subtotal: number;
  public iva: number;
  public fecha: string;

  constructor() {
    this.cliente = new Cliente(null, null, null);
    this.articulos = new Array<Articulo>();
  }
}
