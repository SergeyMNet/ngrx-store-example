import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input()
  count: number;

  @Output()
  increment: EventEmitter<any> = new EventEmitter();

  @Output()
  decrement: EventEmitter<any> = new EventEmitter();

  @Output()
  reset: EventEmitter<any> = new EventEmitter();
}
