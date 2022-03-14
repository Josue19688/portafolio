import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConocimientosComponent } from './pages/conocimientos/conocimientos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';




const app_routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'conocimiento',component:ConocimientosComponent},
  {path:'proyecto',component:ProyectosComponent},
  {path:'**', pathMatch:'full', redirectTo:'/'}
];


@NgModule({
  imports:[
    RouterModule.forRoot(app_routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModulo{}
