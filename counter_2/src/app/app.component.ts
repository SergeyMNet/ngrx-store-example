import { Component, OnInit } from '@angular/core';
import {State, Store} from '@ngrx/store';
 import * as app_reducer from './reducer';
import * as operations from './actions/operations';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Counter } from './models/counter.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { counter } from './reducer';
import { CounterService } from './services/counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public counts$: Observable<Array<Counter>>;


  constructor(private countSrvice: CounterService) {
    this.counts$ = countSrvice.counts$;

  }

  ngOnInit() {

    this.subscription = this.counts$
        .subscribe(
          counts => {
              // Do something
              console.log('geting new');
              console.log(counts);
            }
                ,
            error => {
              // Do something
              console.log('geting new - error');
              console.log(error);
            }

        );
 }


  addCounter() {
    this.countSrvice.addCounter();
  }

  onIncrement(c: Counter) {
    this.countSrvice.onIncrement(c);
  }

  onDecrement(c: Counter) {
    this.countSrvice.onDecrement(c);
  }

  onReset(c: Counter) {
    this.countSrvice.onReset(c);
  }

  onResetAll(c: Counter) {
    this.countSrvice.onResetAll(c);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
