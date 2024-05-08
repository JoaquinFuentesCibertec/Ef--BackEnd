import { Component } from '@angular/core';
import { Libro } from '../../app/models/libro';
import { Tema } from '../../app/models/tema';
import { LibroService } from '../../app/service/libro.service';
import { TemaService } from '../../app/service/tema.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrl: './listar-libros.component.css'
})
export class ListarLibrosComponent {

  Libros : Libro[]=[];
  temas : Tema[]=[];

  constructor(private librosService: LibroService, private temaService: TemaService){}

  ngOnInit(): void{
    this.cargarlibros();
    this.getTemas();
  }

  cargarlibros(){
    this.librosService.lista().subscribe(data => {this.Libros = data}
      ,err => {console.log(err)}
    );
  }

  getTemas(){
    this.temaService.lista().subscribe(data => {
      this.temas = data
    })
  }

  eliminarLibro(productId: any){
    this.librosService.eliminar(productId).subscribe(res =>{
      this.cargarlibros();
    }, error => {
      console.log("Error en la eliminación")
    })
  }


}
