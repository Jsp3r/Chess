import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OpeningComponent } from './Components/opening/opening.component';
import { StrategyComponent } from './Components/strategy/strategy.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './Components/footer/footer.component';
import { E4openingComponent } from './Components/e4opening/e4opening.component';
import { D4openingComponent } from './Components/d4opening/d4opening.component';
import { OthersopeningComponent } from './Components/othersopening/othersopening.component';
import { RulesComponent } from './Components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OpeningComponent,
    StrategyComponent,
    AboutComponent,
    FooterComponent,
    E4openingComponent,
    D4openingComponent,
    OthersopeningComponent,
    RulesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
