import { Component, OnInit } from '@angular/core';
import {State, Store} from "@ngrx/store";
import * as fromRoot from './reducer';
import * as operations from './actions/operations';
import { Observable } from 'rxjs/Observable';
import { Counter } from "./models/counter.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public id:number = 0 ; //simulating IDs
  public counts: Observable<Counter[]>;
  
  constructor(private store: Store<fromRoot.State>) {
    this.counts = this.store.let(fromRoot.getEntities);    
  }

  addCounter() {
    console.log('add');
    this.store.dispatch(new operations.AddOperationAction({
        id: ++ this.id,
      reason: "some reason",
      amount: 0
    })
    );
    //console.log(this.counts.async());
    this.counts = this.store.select(s => s.entities);
    console.log(this.counts);
  }


  onIncrement(c:Counter) {
    console.log(c);
    this.store.dispatch(new operations.IncrementOperationAction(c))
  }

  onDecrement(c:Counter) {
    console.log(c);
    this.store.dispatch(new operations.DecrementOperationAction(c))
  }

  onReset(c:Counter) {
    this.store.dispatch(new operations.ResetOperationAction(c))
  }

  onResetAll(c:Counter) {
    this.store.dispatch(new operations.ResetAllOperationAction(c))
  }

  
}
