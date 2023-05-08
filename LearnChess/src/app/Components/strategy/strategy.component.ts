import { Component } from '@angular/core';
import { Strategy } from 'src/app/strategy';
import { STRATEGY } from 'src/app/strategy-list';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  strategy=STRATEGY;
  selectedStrategy?: Strategy;
  onselect(strategy: Strategy):void{
    this.selectedStrategy = strategy;
}
}
