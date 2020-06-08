import { Component} from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario-a',
  templateUrl: './formulario-a.component.html',
  styleUrls: ['./formulario-a.component.css']
})
export class FormularioAComponent {

constructor(private fb: FormBuilder) { }

  personaForm = this.fb.group({
    nombre: [ 'Pepe', Validators.required ],
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
