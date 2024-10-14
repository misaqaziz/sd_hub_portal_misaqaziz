
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { RegisterEducatinComponent } from './register/register-education/register-educatin.component';
import { RegisterDeclarationComponent } from './register/register-declaration/register-declaration.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: "full" },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-declaration', component: RegisterDeclarationComponent},
  { path: 'register-education', component: RegisterEducatinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
