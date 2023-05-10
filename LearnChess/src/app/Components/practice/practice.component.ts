import { Component } from '@angular/core';
import { Practice } from 'src/app/practice';
import { PRACTICE } from 'src/app/practice-list';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  practice=PRACTICE;
  selectedPractice?: Practice;
  onselect(practice: Practice):void{
    this.selectedPractice = practice;
  }
}
