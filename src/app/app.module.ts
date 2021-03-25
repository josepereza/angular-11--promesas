import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EscritoresComponent } from './components/escritores/escritores.component';
import { FormsModule } from '@angular/forms';
import { EscritorComponent } from './components/escritor/escritor.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';


@NgModule({
  declarations: [
    AppComponent,
    EscritoresComponent,
    EscritorComponent,
    HomeComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
