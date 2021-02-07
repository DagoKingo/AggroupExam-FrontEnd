interface pivot {
  cantidad: number;
  importe: number;
}

export class Articulo {
  public pivot: pivot = { cantidad: 0, importe: 0 };
  constructor(
    public nombre: string,
    public marca: string,
    public precio: number
  ) {}
}
