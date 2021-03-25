import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro} from '../../models/libro.model'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent   {
@Input() libros:Libro[]=[]
  constructor(private ls:LibrosService) { }

  
}
