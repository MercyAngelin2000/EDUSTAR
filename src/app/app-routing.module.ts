import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SchoolProfileComponent } from './views/school-profile/school-profile.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
    children:[
      {path:'userprofile',component:UserProfileComponent},
      {path:'schoolprofile',component:SchoolProfileComponent}
    ]},
  {path:'sample',component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
