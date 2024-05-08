import { Component } from '@angular/core';
import { Tema } from '../../app/models/tema';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../app/service/libro.service';
import { TemaService } from '../../app/service/tema.service';

@Component({
  selector: 'app-registrar-libros',
  templateUrl: './registrar-libros.component.html',
  styleUrl: './registrar-libros.component.css'
})
export class RegistrarLibrosComponent {

  temas : Tema[]=[];
  libroForm! : FormGroup

  constructor(private temaService: TemaService, private fb: FormBuilder, private libroService: LibroService,
    private router: Router
  ){}

    ngOnInit():void{
    this.getTemas();
    this.libroForm = this.fb.group({
      titulo:[null,[Validators.required]],
      precio:[null,[Validators.required]],
      cantEjemplares:[null,[Validators.required]],
      origen:[null,[Validators.required]],
      idtema:[null,[Validators.required]],
    })

  }

  getTemas(){
    this.temaService.lista().subscribe(data => {
      this.temas = data
    })
  }

  registrarLibros(){
    this.libroService.guardar(this.libroForm.value).subscribe(res => {
      if(res===null){
        console.log("Error")
      }else{
        console.log(console.log(res))
        this.router.navigateByUrl("")
      }
    })
  }

}
