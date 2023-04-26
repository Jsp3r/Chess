import { Component } from '@angular/core';
import { Others } from 'src/app/others';
import { OTHERS } from 'src/app/others-list';

@Component({
  selector: 'app-othersopening',
  templateUrl: './othersopening.component.html',
  styleUrls: ['./othersopening.component.css']
})
export class OthersopeningComponent {
  others=OTHERS;
  selectedOthers?: Others;
  onselect(others: Others):void{
    this.selectedOthers = others;
}
}
