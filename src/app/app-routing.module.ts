import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLibrosComponent } from '../Libros/listar-libros/listar-libros.component';
import { ActualizarLibrosComponent } from '../Libros/actualizar-libros/actualizar-libros.component';
import { RegistrarLibrosComponent } from '../Libros/registrar-libros/registrar-libros.component';

const routes: Routes = [
  {path: '',component: ListarLibrosComponent},
  {path: 'actuLibro/:libro', component: ActualizarLibrosComponent},
  {path: 'nuevo', component: RegistrarLibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
