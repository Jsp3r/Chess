import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ForumService} from '../forum.service';
import {ForumMain} from '../forum';
@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {
  @Input()forum?:ForumMain;
  forums:ForumMain[]=[];
   selectForum?:ForumMain;
   onSelect(forum:ForumMain):void{
     this.selectForum=forum;
   }
   constructor(private route:ActivatedRoute,
   private service:ForumService,
   private location:Location  ) { 
     
   }
   ngOnInit(): void {
      this.getForum();
    }

    goBack():void{
      this.location.back();
    }
    add(email:string):void{
      email=email.trim();
      if(!email){return;}
      this.service.addForumMain({ email } as unknown as ForumMain)
      .subscribe(forum=>{
        this.forums.push(forum);
      });
    }
    save(): void {
      if(this.forum){
        this.service.updateForumMain(this.forum)
        .subscribe(() =>this.goBack());
      }
    }
    getForum():void{
       const id=Number(this.route.snapshot.paramMap.get('id'));
       this.service.getForumMain(id).subscribe(forum =>this.forum=forum)
     }
    
   }