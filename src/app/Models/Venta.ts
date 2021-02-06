import { Cliente } from './Cliente';

export class Venta {
  constructor(
    public folio: number,
    public cliente_id: number,
    public cliente: Cliente,
    public total: number,
    public fecha: string
  ) {}
}
