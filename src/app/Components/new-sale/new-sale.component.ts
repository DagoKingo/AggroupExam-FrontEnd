import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/services/Cliente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Articulo } from 'src/app/Models/Articulo';
import { ArticuloService } from 'src/app/services/Articulo.service';
import { Venta } from 'src/app/Models/Venta';
import { VentaService } from 'src/app/services/Venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css'],
  providers: [ClienteService, ArticuloService, VentaService],
})
export class NewSaleComponent implements OnInit {
  public clientes: Cliente[];
  public articulos: Array<Articulo>;
  public venta: Venta;
  dataTableColumns: string[] = [
    'Articulo',
    'Marca',
    'Cantidad',
    'Precio',
    'Importe',
    'Acciones',
  ];
  public dataSource = new MatTableDataSource();

  constructor(
    private modalService: NgbModal,
    private _clienteService: ClienteService,
    private _articuloService: ArticuloService,
    private _ventaService: VentaService,
    private _router: Router
  ) {
    this.venta = new Venta();
  }

  ngOnInit(): void {
    this.getClientes();
    this.getArticulos();
  }

  private getClientes(): void {
    this._clienteService.getClientes().subscribe(
      (response) => (this.clientes = response.data),
      (error) => console.log(error)
    );
  }

  public getArticulos(): void {
    this._articuloService.getArticulos().subscribe(
      (response) => (this.articulos = response.data),
      (error) => console.log(error)
    );
  }

  public openModal(content: any): void {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  public selectCliente(cliente: Cliente): void {
    this.venta.cliente_id = cliente.id;
    this.venta.cliente = cliente;
    this.modalService.dismissAll();
  }

  public addArticle(articulo: Articulo, index: number): void {
    articulo.pivot = { cantidad: 1, importe: articulo.precio * 1 };
    this.venta.articulos.push(articulo);
    this.articulos.splice(index, 1);
    this.setDatasource();
    this.modalService.dismissAll();
  }

  public removeArticulo(articulo: Articulo, index): void {
    this.articulos.push(articulo);
    this.venta.articulos.splice(index, 1);
    this.setDatasource();
  }

  private setDatasource(): void {
    this.dataSource = new MatTableDataSource(this.venta.articulos);
    this.setDetalleVenta();
  }

  private setDetalleVenta(): void {
    this.venta.subtotal = this.venta.articulos.reduce(
      (total, article) => total + article.pivot.importe,
      0
    );
    this.venta.iva = this.venta.subtotal * 0.16;
    this.venta.total = this.venta.subtotal + this.venta.iva;
  }

  public setNewPrice(articulo: Articulo, event: any): void {
    articulo.pivot.importe = articulo.precio * event;
    this.setDetalleVenta();
  }

  public saveVenta(): void {
    if (!this.validateClient()) return;
    if (!this.validateArticles()) return;
    this._ventaService.store(this.venta).subscribe(
      (response) => {
        alert('Bien Hecho, Tu venta ha sido registrada correctamente');
        this._router.navigate(['/sales']);
      },
      (error) => console.error(error)
    );
  }

  private validateClient(): Boolean {
    if (!this.venta.cliente.id) {
      alert('Seleccione un cliente');
      return false;
    } else return true;
  }

  private validateArticles(): Boolean {
    if (this.venta.articulos.length === 0) {
      alert('No se han seleccionado articulos');
      return false;
    } else return true;
  }
}
