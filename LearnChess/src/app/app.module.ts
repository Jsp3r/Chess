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
import { SourcesComponent } from './Components/sources/sources.component';
import { PracticeComponent } from './Components/practice/practice.component';


import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ForumModule } from './Components/forum/forum.module';


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
    SourcesComponent,
    PracticeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ForumModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
