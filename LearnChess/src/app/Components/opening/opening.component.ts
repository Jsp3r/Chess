import { Component } from '@angular/core';
import { Opening } from 'src/app/opening';
import { OPENING } from 'src/app/opening-list';



@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent {
  opening=OPENING;
  selectedOpening?: Opening;
  onselect(opening: Opening):void{
    this.selectedOpening = opening;
}
}
