import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GaurdService } from './gaurd.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"hm",component:HomeComponent},
  {path:"ad",component:AdminComponent,canActivate:[GaurdService]},
  {path:"lg",component:LoginComponent},
  {path:"lo",component:LogoutComponent},
  {path:"wel",component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
