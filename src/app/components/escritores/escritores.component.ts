import { Component, OnInit } from '@angular/core';
import { EscritoresService} from '../../services/escritores.service'
import { Escritor } from '../../models/escritor.model';
@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css']
})
export class EscritoresComponent implements OnInit {
todosescritores:Escritor[]=[];
escritoresPais:any[]=[]
seleccionado!:string
escritor!:Escritor;
  constructor(private es:EscritoresService) { }

  ngOnInit(): void {
  // this.todosescritores= this.es.getAll()
  //   console.log(this.todosescritores)
  this.es.getAllPromise().then(dato=>{
    this.todosescritores=dato
  })
  }
enviar(){
   
  // console.log(this.es.getPais(this.escritor[0]))
this.es.getPais(this.seleccionado).then(data=>{
  this.todosescritores=data;
})

}
}
