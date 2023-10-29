import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
//Angular Materialas
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'


//Rutas ... las rutas deberian estar en su propio modulo
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaEgresadosComponent } from './components/lista-egresados/lista-egresados.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { FootComponent } from './foot/foot.component';
import { EditarComponent } from './components/editar/editar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarDatosComponent } from './components/ingresar-datos/ingresar-datos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'lista-egresados', component: ListaEgresadosComponent },
  { path: 'ingresar-datos', component: IngresarDatosComponent },
  { path: 'borrar', component: BorrarComponent },
  { path: 'editar', component: EditarComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListaEgresadosComponent,
    CabezaComponent,
    FootComponent,
    EditarComponent,
    BorrarComponent,
    InicioComponent,
    IngresarDatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
