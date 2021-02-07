import { Component, OnInit, OnDestroy } from '@angular/core';
import { Venta } from 'src/app/Models/Venta';
import { VentaService } from 'src/app/services/Venta.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [VentaService],
})
export class SalesComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'folio_venta',
    'no_cliente',
    'nombre',
    'total',
    'fecha',
  ];
  dataSource: Array<Venta>;
  constructor(private _ventaService: VentaService) {
    this.dataSource = new Array<Venta>();
  }

  ngOnInit(): void {
    this._ventaService.getVentas().subscribe(
      (response) => (this.dataSource = response.data),
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {}
}
