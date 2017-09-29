import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Counter } from "./models/counter.model";
import * as operations from './actions/operations';
import { combineReducers, ActionReducer } from '@ngrx/store';

export interface State {
  entities: Array<Counter>
};

const initialState: State = { entities: [] };

export function counter(state = initialState, action: operations.Actions): State {
  switch (action.type) {

    case operations.ActionTypes.ADD_OPERATION: {
      console.log(state);
      const counter: Counter = action.payload;
      return {
        entities: [...state.entities, counter]
      };
    }

    case operations.ActionTypes.INCREMENT_OPERATION: {
      const counter = ++action.payload.amount;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, counter) : item)
      });
    }

    case operations.ActionTypes.DECREMENT_OPERATION: {
      if (action.payload.amount > 0)
        --action.payload.amount;
      const counter = action.payload.amount;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, counter) : item)
      });
    }

    case operations.ActionTypes.RESET_ALL_OPERATION: {
      state.entities.forEach(element => {
        element.amount = 0;
      });
      return Object.assign({}, state);
    }

    case operations.ActionTypes.RESET_OPERATION: {
      const counter = action.payload.amount = 0;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, counter) : item)
      });
    }

    default:
      return state;
  }
}


export function getEntities(state$: Observable<State>) {
  return state$.select(s => s.entities);
}