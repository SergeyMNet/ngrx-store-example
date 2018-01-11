import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Counter } from './models/counter.model';
import * as operations from './actions/operations';
import { combineReducers, ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppStore {
  entities: Counter[];
};

const initialState: AppStore = { entities: []};

export const counter = (state = initialState, action: operations.Actions): AppStore => {
  switch (action.type) {

    case operations.ActionTypes.ADD_OPERATION: {
      console.log('add oper');
      console.log(state);
      const c: Counter = action.payload;
      return {
        entities: [...state.entities, c]
      };
    }

    case operations.ActionTypes.INCREMENT_OPERATION: {
      const c = ++action.payload.amount;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, c) : item)
      });
    }

    case operations.ActionTypes.DECREMENT_OPERATION: {
      if (action.payload.amount > 0) {
        --action.payload.amount;
      }
      const c = action.payload.amount;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, c) : item)
      });
    }

    case operations.ActionTypes.RESET_ALL_OPERATION: {
      state.entities.forEach(element => {
        element.amount = 0;
      });
      return Object.assign({}, state);
    }

    case operations.ActionTypes.RESET_OPERATION: {
      const c = action.payload.amount = 0;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, c) : item)
      });
    }

    default:
      return state;
  }
}
