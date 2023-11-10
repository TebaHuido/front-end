import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/personas';
import { ToastrService } from 'ngx-toastr';
import { Carrera } from 'src/app/models/carrera.model';
import { HttpClient } from '@angular/common/http';
//import { list_egresados } from '../lista-egresados/lista-egresados.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.component.html',
  styleUrls: ['./ingresar-datos.component.css']
})
export class IngresarDatosComponent {
  egresadoForm: FormGroup;

  carreras: Carrera[] = [
    {carrera_id: 312, nombre_carrera: 'PEDAGOGÍA EN INGLES'},
    {carrera_id: 333, nombre_carrera: 'LIC. EN INGLES INGRESO COMÚN'}
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private httpClient: HttpClient
    ) {
    this.egresadoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      anio_ingreso: ['', Validators.required],
      anio_titulacion: ['', Validators.required],
      carrera: ['', Validators.required]
    })
  }

  matcher = new MyErrorStateMatcher();

  ingresar(){

    const EGRESADO: Persona = {
      nombre_completo: this.egresadoForm.get('nombre')?.value.toUpperCase(),
      correo: this.egresadoForm.get('correo')?.value,
      anio_ingreso: this.egresadoForm.get('anio_ingreso')?.value,
      anio_titulacion: this.egresadoForm.get('anio_titulacion')?.value,
      carrera: this.egresadoForm.get('carrera')?.value,
    };
    //list_egresados.push(EGRESADO);
    this.httpClient.post('http://localhost:3000/datos', EGRESADO).subscribe(
      (response) => {
        // Manejar la respuesta del middleware, por ejemplo, mostrar una confirmación al usuario.
        console.log('Egresado creado con éxito:', response);
        this.toastr.success('Datos ingresados correctamente', 'Egresado Registrado!');
        this.router.navigate(['/lista-egresados']);
      },
      (error) => {
        // Manejar errores, como mostrar un mensaje de error al usuario.
        console.error('Error al crear el egresado:', error);
      }
    );
    console.log(EGRESADO);
    this.toastr.success('Datos ingresados correctamente', 'Egresado Registrado!');
    this.router.navigate(['/lista-egresados']);
  };

}
