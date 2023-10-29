import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/personas';
import { EgresadosService } from 'src/app/services/egresados.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista-egresados',
  templateUrl: './lista-egresados.component.html',
  styleUrls: ['./lista-egresados.component.css']
})
export class ListaEgresadosComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'correo', 'carrera', 'anio_ingreso', 'anio_titulacion'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private egresadosService: EgresadosService) {
    this.dataSource = new MatTableDataSource<Persona>([]);
  }

  ngAfterViewInit(): void {
    this.egresadosService.getEgresados().subscribe((egresados: Persona[]) => {
      this.dataSource.data = egresados;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}



