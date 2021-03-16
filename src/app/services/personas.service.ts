import { Injectable } from '@angular/core';
import {Persona} from '../models/persona.model'
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

personas: Persona[];
activas!:Persona[];
  constructor() { 
    this.personas=[
      new Persona('Mario1','Pereza',25,true),
      new Persona('Mario2','Perezas',27,true),
      new Persona('Mario3','Perezas dd',28,false),
      new Persona('Mario4','Perez gato',23,true),


    ]
  }

  getAll(){
    return this.personas;
  }

  getActivos():Promise<Persona[]>{
   return new Promise((resolve, reject)=>{
   this.activas=this.personas.filter(persona=>persona.activo) 
   resolve(this.activas)
})
  }
}