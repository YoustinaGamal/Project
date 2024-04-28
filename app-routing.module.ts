import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { AboutComponent } from './Components/About/about.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ShowDetailsComponent } from './Components/show-details/show-details.component';
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';
import { UpdateComponent } from './Components/update/update.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { HomeUserComponent } from './Components/home-user/home-user.component';
import { ValidCodeComponent } from './Components/valid-code/valid-code.component';

const routes: Routes = [
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
  { path: 'Welcome', component: WelcomeComponent },
  //{ path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact-us', component: ContactUsComponent },
  { path: 'show-details', component: ShowDetailsComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: 'Update', component: UpdateComponent },
  { path: 'Forget', component: ForgetComponent},
  { path: 'HomeUser', component: HomeUserComponent},
  { path: 'ValidCode', component:ValidCodeComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
