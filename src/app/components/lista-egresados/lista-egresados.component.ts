import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/personas';


export const list_egresados: Persona[] = [
  { nombre_completo: "ISMAEL HUMBERTO CORVALAN PINTO", correo: "icorvalanp@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
  { nombre_completo: "GABRIEL PASCUAL MAMANI FLORES", correo: "gabriel1976arica@gmail.com", carrera: "PEDAGOGÍA EN INGLES", 
  anio_ingreso: 2011, anio_titulacion: 2017},
    
];

@Component({
  selector: 'app-lista-egresados',
  templateUrl: './lista-egresados.component.html',
  styleUrls: ['./lista-egresados.component.css']
})
export class ListaEgresadosComponent implements AfterViewInit{
  displayedColumns: string[] = ['nombre', 'correo', 'carrera', 'anio_ingreso', 'anio_titulacion'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){ 
    this.dataSource = new MatTableDataSource(list_egresados);  
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
  
 



