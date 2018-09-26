import {Component} from '@angular/core';
import {Observable} from "rxjs/index";
import {select, Store} from "@ngrx/store";
import {AppState, DECREMENT, INCREMENT, RESET} from "../store/store";
import {map, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applicationOne';

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(
      map((s: { count: AppState }) => {
          return s.count.n
        }
      )
    )
    //select('count','n'));
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }

}
