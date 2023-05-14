import { Component,Input,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ForumService} from '../forum.service';
import {ForumMain} from '../forum';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css'],
  providers:[ForumService]
})
export class ForumListComponent implements OnInit {

  forums:ForumMain[]=[];
  @Input() forum?: ForumMain;
  selectedforum?:ForumMain;
  constructor(
    private service: ForumService,
    private location:Location,
    private route: ActivatedRoute){
    }  
      ngOnInit(): void {
      this.getForum();
    }
    
    goBack():void{
      this.location.back();
    }
    save(): void {
      if(this.forum){
        this.service.updateForumMain(this.forum)
        .subscribe(() =>this.goBack());
      }
    }
    getForum() {
      this.service.getForums().
      subscribe(forums=>this.forums=forums);
        }
        add(email:string):void{
          email=email.trim();
          if(!email){return;}
          this.service.addForumMain({ email } as unknown as ForumMain)
          .subscribe(forum=>{
            this.forums.push(forum);
          });
        }
        delete(forum:ForumMain): void{
          this.confirmDelete();
          this.forums=this.forums.filter(i=>i!==forum);
          this.service.deleteForumMain(forum.id).subscribe();
        }
        confirmDelete(){
          alert('Are you sure you want to delete this Item?');
        }
    }