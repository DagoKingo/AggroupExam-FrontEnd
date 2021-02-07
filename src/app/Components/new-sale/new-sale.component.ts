import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/services/Cliente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Articulo } from 'src/app/Models/Articulo';
import { ArticuloService } from 'src/app/services/Articulo.service';
import { Venta } from 'src/app/Models/Venta';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css'],
  providers: [ClienteService, ArticuloService],
})
export class NewSaleComponent implements OnInit {
  public clientes: Cliente[];
  public articulos: Articulo[];
  public venta: Venta;

  constructor(
    private modalService: NgbModal,
    private _clienteService: ClienteService,
    private _articuloService: ArticuloService
  ) {
    this.venta = new Venta(0, 0, new Cliente(0, '', ''), 0, '20-04-2012');
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
    this.venta.cliente = cliente;
    this.modalService.dismissAll();
  }

  public addArticle(articulo: Articulo): void {
    this.venta.articulos.push(articulo);
    this.modalService.dismissAll();
  }
}
