import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params, ParamMap, ChildActivationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EscritoresService} from '../../services/escritores.service'
import { Escritor } from '../../models/escritor.model';
import { LibrosService } from 'src/app/services/libros.service';
import {Libro} from '../../models/libro.model'
@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {
escritorId!:number | undefined ;
escritor!:Escritor | undefined;
arrLibros:Libro[]=[]
  constructor(
    private es:EscritoresService,
    private route: ActivatedRoute,
    private router: Router ,
    private ls:LibrosService ) {}

  // ngOnInit() {
  //   const id =this.route.snapshot.paramMap.get('id');

  //  this.es.getEscritor(id).then((dato:any)=>this.escritor=dato)
       
  // }
  ngOnInit() {
   this.route.params.subscribe (async params=>{
    this.escritor= await this.es.getEscritor(parseInt(params.id))

    console.log('este escritgor ',this.escritorId)
    this.ls.getByEscritor(this.escritor?.id).then((item:Libro[])=>{
      console.log('mi array en escritor ',item)
     this.arrLibros= item
    })
   })

   //this.escritor= await this.es.getEscritor(id)
    
   
  }
}


