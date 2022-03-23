import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ConocimientosComponent } from './pages/conocimientos/conocimientos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { OtrosProyectosComponent } from './pages/otros-proyectos/otros-proyectos.component';
import { ColaboracionesComponent } from './pages/colaboraciones/colaboraciones.component';
import { AppRoutingModulo } from './app-routing.module';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConocimientosComponent,
    ProyectosComponent,
    OtrosProyectosComponent,
    ColaboracionesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
