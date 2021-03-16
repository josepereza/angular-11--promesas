import { Component, OnInit } from '@angular/core';
import { PersonasService } from './services/personas.service';
import { Persona } from './models/persona.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'promesas';
  arrayPersonas!: Persona[];
  activos: Persona[] = []
  constructor(private ps: PersonasService) {

  }
  ngOnInit(): void {

    this.arrayPersonas = this.ps.getAll()

    //promesas del servicio
    this.ps.getActivos().then((valor: any) => {
      this.activos=valor;
      console.log(valor)
    })

    //promesas del propio componente
    this.mipromesa().then((dato: any) => console.log(dato))
    this.miPrimeraPromise.then((successMessage) => {
      // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
      // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
      console.log("¡Sí! " + successMessage);
    });
  }


  mipromesa(): Promise<string> {
    return new Promise((res, reject) => {
      setTimeout(() => { res('holla amigo') }, 5000)
    })
  }

  miPrimeraPromise: Promise<any> = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function () {
      resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 3250);
  });
}
