import { Persona } from './../persona';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-formulario-b',
  templateUrl: './formulario-b.component.html',
  styleUrls: ['./formulario-b.component.css']
})
export class FormularioBComponent implements OnInit {

  constructor(private fb: FormBuilder) {}   

  @Input() personaDeA: Persona;

  personaForm : FormGroup;


iniciarFormulario(personaA : Persona){
  this.personaForm = this.fb.group({
    nombre: [ personaA.nombre, Validators.required ],
    apellido: [ personaA.apellido ],
    edad: [ personaA.edad ],
    telefono: [ personaA.telefono ]
  });
}



ngOnInit() {
    debugger;
    this.iniciarFormulario(this.personaDeA);
  }


submit() {
		
		}

}
