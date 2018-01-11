import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
// import '@ngrx/core/add/operator/select';

import { Counter } from '../models/counter.model';
import * as app_reducer from '../reducer';
import * as operations from '../actions/operations';

@Injectable()
export class CounterService {

    counts$: Observable<Array<Counter>>;
    public id = 0 ; // simulating IDs

    constructor(private store: Store<app_reducer.AppStore>) {
        // counter - it's name of store
        this.counts$ = store.select( s => s.counter.entities );
    }

    addCounter() {
        console.log('add');
        this.store.dispatch(new operations.AddOperationAction({
            id: ++ this.id,
            reason: 'some reason',
            amount: 0
        }));
    }

    onIncrement(c: Counter) {
        console.log(c);
        this.store.dispatch(new operations.IncrementOperationAction(c));
    }

    onDecrement(c: Counter) {
        console.log(c);
        this.store.dispatch(new operations.DecrementOperationAction(c));
    }

    onReset(c: Counter) {
        this.store.dispatch(new operations.ResetOperationAction(c));
    }

    onResetAll(c: Counter) {
        this.store.dispatch(new operations.ResetAllOperationAction(c));
    }
}
