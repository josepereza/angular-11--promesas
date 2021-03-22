import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params, ParamMap, ChildActivationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EscritoresService} from '../../services/escritores.service'
import { Escritor } from '../../models/escritor.model';
@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {
escritorId:number=0;
escritor!:Escritor | undefined;
  constructor(
    private es:EscritoresService,
    private route: ActivatedRoute,
    private router: Router  ) {}

  // ngOnInit() {
  //   const id =this.route.snapshot.paramMap.get('id');

  //  this.es.getEscritor(id).then((dato:any)=>this.escritor=dato)
       
  // }
  ngOnInit() {
   this.route.params.subscribe (async params=>{
    this.escritor= await this.es.getEscritor(parseInt(params.id))
   })

   //this.escritor= await this.es.getEscritor(id)
    
   
  }
}


