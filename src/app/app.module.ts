import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioAComponent } from './formulario-a/formulario-a.component';
import { FormularioBComponent } from './formulario-b/formulario-b.component';
import { FormularioCComponent } from './formulario-c/formulario-c.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAComponent,
    FormularioBComponent,
    FormularioCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
