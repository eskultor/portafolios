import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './assets/public/detail/detail.component';
import { ErrorComponent } from './assets/public/error/error.component';
import { ProyectComponent } from './assets/public/proyect/proyect.component';
import { HomeComponent } from './assets/public/home/home.component'
import { SearchComponent } from './assets/public/search/search.component';
//componentes de ususrio
import { ProfileComponent } from './assets/users/profile/profile.component';
import { RegistredComponent } from './assets/users/registred/registred.component';
import { LoginComponent } from './assets/users/login/login.component';

const routes: Routes = 
[
  {path:'', component:HomeComponent},
  {path:'inicio', component:HomeComponent},
  {path:'proyecto/:id', component:ProyectComponent},
  {path:'search/:id', component:SearchComponent},
  {path:'search', component:SearchComponent},
  {path:'detail/:id', component:DetailComponent},
  //rutas de usuario
  {path:'registred', component:RegistredComponent},
  {path:'login', component:LoginComponent},
  {path:'perfil', component:ProfileComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
