import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { RulesComponent } from './Components/rules/rules.component';
import { SourcesComponent } from './Components/sources/sources.component';
import { StrategyComponent } from './Components/strategy/strategy.component';
import { OthersopeningComponent } from './Components/othersopening/othersopening.component';
import { OpeningComponent } from './Components/opening/opening.component';
import { FooterComponent } from './Components/footer/footer.component';
import { E4openingComponent } from './Components/e4opening/e4opening.component';
import { D4openingComponent } from './Components/d4opening/d4opening.component';
import { PracticeComponent } from './Components/practice/practice.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { ForumModule } from './Components/forum/forum.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    RulesComponent,
    SourcesComponent,
    StrategyComponent,
    OthersopeningComponent,
    OpeningComponent,
    FooterComponent,
    E4openingComponent,
    D4openingComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ForumModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
