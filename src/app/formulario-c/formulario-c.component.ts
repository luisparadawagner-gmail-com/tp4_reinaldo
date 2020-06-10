import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface Tabla {
  
  posicion: number;
  nombre: string;
  apellido: string;
  edad: number;
  telefono: number;
}

const ELEMENT_DATA: Tabla[] = [
  {posicion: 1, nombre: 'Pepe', apellido: 'Argento', edad: 43, telefono: 4948848},
  {posicion: 2, nombre: 'Roberto', apellido: 'Carlos', edad: 50, telefono: 4344344},
  {posicion: 3, nombre: 'Juan', apellido: 'Lopez', edad: 30, telefono: 7949948},
  {posicion: 4, nombre: 'Cacho', apellido: 'Castaña', edad: 65, telefono: 2946648},
  {posicion: 5, nombre: 'Esteban', apellido: 'Quito', edad: 18, telefono: 3944448}
];

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {

  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'edad', 'telefono', 'accion'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }



}
