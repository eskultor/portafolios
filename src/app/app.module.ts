import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './assets/public/detail/detail.component';
import { ErrorComponent } from './assets/public/error/error.component';
import { HeaderComponent } from './assets/public/header/header.component';
import { ProyectComponent } from './assets/public/proyect/proyect.component';
import { SearchComponent } from './assets/public/search/search.component';
import { LoginComponent } from './assets/users/login/login.component';
import { RegistredComponent } from './assets/users/registred/registred.component';
import { ProfileComponent } from './assets/users/profile/profile.component';
import { HomeComponent } from './assets/public/home/home.component';
import { NavComponent } from './assets/public/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ErrorComponent,
    HeaderComponent,
    ProyectComponent,
    SearchComponent,
    LoginComponent,
    RegistredComponent,
    ProfileComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
