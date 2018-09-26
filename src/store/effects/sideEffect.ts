import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs/index";
import {Action} from "@ngrx/store";
import {catchError, filter, map, mergeMap} from "rxjs/internal/operators";

@Injectable()
export class SideEffects {
  // Listen for the 'LOGIN' action
  @Effect({ dispatch: false })
  login$: Observable<Action> = this.actions$.pipe(
    ofType('INCREMENT'),

    map(m=>{
     console.log("connected")
      return {type:"RESET"}as Action
    } )
  );

  constructor( private actions$: Actions<Action>) {



  }
}
