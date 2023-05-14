import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';


import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { ForumListComponent } from './forum-list/forum-list.component';

const forumRoutes: Routes=[
    {path: 'forum', redirectTo: '/forum'},
    {path : 'forums/:id', redirectTo: '/forums/:id'},
    {path: 'forum', component: ForumListComponent},
    {path: 'forums/:id', component: ForumDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(forumRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ForumRoutingModule { }