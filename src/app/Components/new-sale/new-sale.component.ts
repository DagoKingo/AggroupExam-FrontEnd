import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/services/Cliente.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css'],
  providers: [ClienteService],
})
export class NewSaleComponent implements OnInit {
  public clientes: Cliente[];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {}
}
