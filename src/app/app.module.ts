import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioAComponent } from './formulario-a/formulario-a.component';
import { FormularioBComponent } from './formulario-b/formulario-b.component';
import { FormularioCComponent } from './formulario-c/formulario-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAComponent,
    FormularioBComponent,
    FormularioCComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
