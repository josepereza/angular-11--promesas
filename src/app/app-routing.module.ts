import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EscritorComponent } from './components/escritor/escritor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'escritor/:id' , component:EscritorComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
