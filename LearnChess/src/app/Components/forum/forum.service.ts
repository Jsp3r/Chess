import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { ForumMain } from "./forum";
import { FORUM } from "./forums";

@Injectable({
    providedIn: 'root'
})
export class ForumService {
    private forumsUrl='api/forums';

httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

    getForums(): Observable<ForumMain[]>{
        return this.http.get<ForumMain[]>(this.forumsUrl)
        .pipe(
          tap(_=>this.log('Retrieved Forums')),
          catchError(this.handleError<ForumMain[]>('getForums',[])));
        }
        private handleError<T>(operation = 'operation',result?:T){
          return (error:any):Observable<T>=>{
            console.error(error);
            this.log(`${operation}failed:${error.message}`);
            return of (result as T);
          }
        }
    
    getForumMain(id:number): Observable<ForumMain>{
     const url=`${this.forumsUrl}/${id}`;
      return this.http.get<ForumMain>(url)
      .pipe(
        tap(_=>this.log(`fetched forum id=${id}`)),
        catchError(this.handleError<ForumMain>(`getForumMain id=${id}`))
      );
    }
    updateForumMain(forum: ForumMain):Observable<any> {
      return this.http.put(this.forumsUrl, forum, this.httpOptions).pipe(
        tap(_=>this.log(`updated forum id=${forum.id}`)),
        catchError(this.handleError<any>('updateForumMain'))
      )
    }
      addForumMain(email:ForumMain):Observable<ForumMain>{
        return this.http.post<ForumMain>(this.forumsUrl, email,this.httpOptions).pipe(
          tap((newForumMain:ForumMain)=>this.log(`added forum w/ id=${newForumMain.id}`)),
          catchError(this.handleError<ForumMain>('addForumMain'))
        );
      }
    deleteForumMain(id:number):Observable<ForumMain>{
      const url = `${this.forumsUrl}/${id}`;
      return this.http.delete<ForumMain>(url,this.httpOptions).pipe(
        tap(_=>this.log(`deleted forum id=${id}`)),
        catchError(this.handleError<ForumMain>('deleteHero'))
      )
    }


private log(message: string) {
    this.messageService.add(`AccountService:${message}`);
  }
  constructor(
    private http:HttpClient,
    private messageService:MessageService,
  ) { }

    } 