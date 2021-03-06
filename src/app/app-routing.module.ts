import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConocimientosComponent } from './pages/conocimientos/conocimientos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PostsComponent } from './pages/posts/posts.component';




const app_routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'conocimiento',component:ConocimientosComponent},
  {path:'proyecto',component:ProyectosComponent},
  {path:'post',component:PostsComponent},
  {path:'**', pathMatch:'full', redirectTo:'/'}
];


@NgModule({
  imports:[
    RouterModule.forRoot(app_routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModulo{}
