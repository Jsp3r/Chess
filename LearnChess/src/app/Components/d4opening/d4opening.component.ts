import { Component } from '@angular/core';
import { D4 } from 'src/app/d4';
import { d4 } from 'src/app/d4-list';

@Component({
  selector: 'app-d4opening',
  templateUrl: './d4opening.component.html',
  styleUrls: ['./d4opening.component.css']
})
export class D4openingComponent {
  d4=d4;
  selectedD4?: D4;
  onselect(d4: D4):void{
    this.selectedD4 = d4;
}
}
