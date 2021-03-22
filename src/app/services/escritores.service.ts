import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {
 escritores:Escritor[]=[];
 escritorPais:Escritor[]=[];
 escritorFound:Escritor | undefined
 id:number=0
 escritor: undefined
  constructor() { 
  
  }
  getAll():Escritor[]{
    return ESCRITORES;
  }

  getAllPromise():Promise<Escritor[]>{
    return new Promise((resolve)=>{
      resolve( ESCRITORES )
    })
  }

  getEscritor(id:number):Promise<Escritor | undefined>{
    return new Promise((resolve)=>{
      this.escritorFound=ESCRITORES.find(dato=>{return dato.id===id;} );
     
           resolve(this.escritorFound) ;
      
        
  })
}

   getPais (pais:string):Promise<Escritor[]>{

  return  new Promise((resolve,reject)=>{
 this.escritorPais= ESCRITORES.filter(dato=>dato.pais===pais)
    console.log(this.escritorPais)
    resolve(this.escritorPais)
    
  })

   
  }
}
