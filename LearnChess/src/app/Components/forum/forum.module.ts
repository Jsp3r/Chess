import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from '../../in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumListComponent } from './forum-list/forum-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ForumRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  declarations: [
    ForumListComponent,
    ForumDetailsComponent 
  ]
})
export class ForumModule {}