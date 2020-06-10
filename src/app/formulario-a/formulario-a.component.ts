import { Persona } from './../persona';
import { Component, Output, EventEmitter} from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})
export class FormularioAComponent {

constructor(private router: Router, private fb: FormBuilder) { }

persona: Persona;
showFormA: boolean = true;
showFormB: boolean = false;

  personaForm = this.fb.group({
    nombre: [ 'Pepe', Validators.required ],
    apellido: [ 'Argento' ],
    edad: [ 43 ],
    telefono: [4994949]
  });

  submit() {
    this.exportarPlantilla();
	}

  exportarPlantilla(){
    debugger;
    this.persona = this.personaForm.value;
    this.showFormB = true;
    this.showFormA = false;
  }
}
