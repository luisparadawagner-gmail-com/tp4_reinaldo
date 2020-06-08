import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-b',
  templateUrl: './formulario-b.component.html',
  styleUrls: ['./formulario-b.component.css']
})
export class FormularioBComponent {
 // @Input() formu: FormBuilder;

 constructor(private formu: FormBuilder) { }

  personaForm = this.formu.group({
    nombre: [ 'Kiko', Validators.required ],
    apellido: [ '' ],
    edad: [ '' ],
    telefono: [ '' ]
  });


  submit() {
	  this.personaForm.value();

		 this.personaForm.setValue({
			nombre: 'Diego',
			apellido: 'Maradona',
			edad: 59,
			telefono: [ '' ]
		});

		 this.personaForm.patchValue({ edad: 60 });
	}

}
