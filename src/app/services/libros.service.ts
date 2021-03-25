import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model'
import {LIBROS }from '../db/libros.db'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }
  getByEscritor(escritorId:number | undefined):Promise<Libro[]>{
    return new Promise((resolve, reject)=>{
      const arrFiltrado=LIBROS.filter(libro=> 
        libro.escritor==escritorId
         
      )
      console.log('servicii libros' , arrFiltrado)
      resolve(arrFiltrado)
    })
  }
}
