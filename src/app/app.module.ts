import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLibrosComponent } from '../Libros/listar-libros/listar-libros.component';
import { RegistrarLibrosComponent } from '../Libros/registrar-libros/registrar-libros.component';
import { ActualizarLibrosComponent } from '../Libros/actualizar-libros/actualizar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLibrosComponent,
    RegistrarLibrosComponent,
    ActualizarLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
