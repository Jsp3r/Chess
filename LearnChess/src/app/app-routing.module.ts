import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OpeningComponent } from './Components/opening/opening.component';
import { StrategyComponent } from './Components/strategy/strategy.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'opening', component: OpeningComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
