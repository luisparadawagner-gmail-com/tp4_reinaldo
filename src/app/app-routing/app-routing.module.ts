import { FormularioAComponent } from './../formulario-a/formulario-a.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioBComponent } from '../formulario-b/formulario-b.component';
import { FormularioCComponent } from '../formulario-c/formulario-c.component';


const routes: Routes = [

        {path: 'formulario-a', component: FormularioAComponent },
        {path: 'formulario-b', component: FormularioAComponent },
        {path: 'formulario-c', component: FormularioCComponent }
    ];

@NgModule({
        imports: [RouterModule.forRoot(routes) ],
        exports: [RouterModule],
        declarations: []
    })
    export class AppRoutingModule { }
