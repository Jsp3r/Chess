import { Component } from '@angular/core';
import { E4 } from 'src/app/e4';
import { e4 } from 'src/app/e4-list';

@Component({
  selector: 'app-e4opening',
  templateUrl: './e4opening.component.html',
  styleUrls: ['./e4opening.component.css']
})
export class E4openingComponent {
  e4=e4;
  selectedE4?: E4;
  onselect(e4: E4):void{
    this.selectedE4 = e4;
}
}
