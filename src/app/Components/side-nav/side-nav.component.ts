import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Section } from 'src/app/Models/section';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  public sections = new Array<Section>();
  public sectionNameSelected: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.sections.push(
      new Section('Nueva Venta', 'new-sale', 'playlist_add'),
      new Section('Listado de ventas', 'sales', 'point_of_sale')
    );
    this.sectionNameSelected = 'Listado de Ventas';
  }
}
