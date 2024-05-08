import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tema } from '../../app/models/tema';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../app/service/libro.service';
import { TemaService } from '../../app/service/tema.service';

@Component({
  selector: 'app-actualizar-libros',
  templateUrl: './actualizar-libros.component.html',
  styleUrl: './actualizar-libros.component.css'
})
export class ActualizarLibrosComponent {

  temas : Tema[]=[];
  libro = this.ar.snapshot.params['libro']
  libroForm! : FormGroup

  constructor(private ar : ActivatedRoute, private router: Router, private service: LibroService, private fb : FormBuilder,
    private temaService: TemaService
  ){}

  ngOnInit():void{
    this.getLibroById();
    this.libroForm = this.fb.group({
      titulo:[null,[Validators.required]],
      precio:[null,[Validators.required]],
      cantEjemplares:[null,[Validators.required]],
      origen:[null,[Validators.required]],
      idtema:[null,[Validators.required]],
    })
    this.getTemas();
  }

  getLibroById(){
    this.service.GetId(this.libro).subscribe((res) =>{
      this.libroForm.patchValue(res);
    })
  }


  getTemas(){
    this.temaService.lista().subscribe(data => {
      this.temas = data
    })
  }

  actualizarlibros(){
    this.service.actualizar(this.libro, this.libroForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      }else{
        this.router.navigateByUrl("")
      }
    })
  }

}
