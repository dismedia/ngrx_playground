import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

import { Store, select } from '@ngrx/store';

const initialState = {
  data:[],
  n:0
} as AppState;

export function thecounterReducer(state:AppState = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:

      return Object.assign({},state,{n:state.n+1}) ;

    case DECREMENT:
      return Object.assign({},state,{n:state.n-1});

    case RESET:
      return Object.assign({},state,{n:0});

    default:
      return state;
  }
}


export interface AppState{
  n:number,
  data:any[]
};
