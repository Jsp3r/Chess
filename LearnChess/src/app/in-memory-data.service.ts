import { Injectable } from '@angular/core';
import {InMemoryDbService} from'angular-in-memory-web-api';
import{ForumMain} from './Components/forum/forum';
@Injectable({
    providedIn:'root'
})

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const forums=[
            {
                id: 1,
                question: 'Is Sicilian A bad opening?',
                answer: ''
            },
            {
                id: 2,
                question: 'What is the Best Move?',
                answer: ''
            },
            {
                id: 3,
                question: 'What is the counter for Queens Gambit?',
                answer: ''
            },
            {
                id: 4,
                question: 'What is the best defense for English?',
                answer: ''
            },
            {
                id: 5,
                question: 'What is the coutner of Ruy Lopez?',
                answer: ''
            }];
        return{forums}
      }
      
      generateId(forums:ForumMain[]):number{
        return forums.length >0? Math.max(...forums.map(forum=>forum.id)) + 1 :101;
      }
    
    }