import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { SignupComponent } from './components/signup/signup.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';





const routes : Routes=[
  {path:"" ,component:HomeComponent},
  {path:"login", component : LoginComponent},
  {path:"signup",component : SignupComponent},
  {path:"**" , component:ErrorPageComponent}


] ;


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{}