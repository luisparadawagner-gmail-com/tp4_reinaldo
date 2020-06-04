import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})
export class FormularioAComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  PersonaForm = this.fb.group({
		nombre: [ 'Pepe', Validators.required ],
		apellido: [ '' ],
    edad: [ '' ],
    telefono: [ '' ]
	});

  ngOnInit(): void {
  }

}
