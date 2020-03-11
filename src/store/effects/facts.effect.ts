import { FactsService } from './../../services/facts.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap, exhaustMap } from 'rxjs/operators';
import { FactsActionTypes, LoadFactsSuccess, LoadFacts, FilterFacts } from '../actions/facts.actions';

@Injectable()
export class FactsEffects {
  @Effect()
  loadFacts$ = this.actions$.pipe(
    ofType<LoadFacts>(FactsActionTypes.LOAD_FACTS),
    mergeMap(() => {
      return this.factsService.getFacts().pipe(map(facts => new LoadFactsSuccess({ facts })));
    })
  );

  @Effect()
  filterFacts$ = this.actions$.pipe(
    ofType<FilterFacts>(FactsActionTypes.FILTER_FACTS),
    exhaustMap(action => {
      return this.factsService
        .getFilteredFacts(action.payload.filterText)
        .pipe(map(facts => new LoadFactsSuccess({ facts })));
    })
  );

  constructor(private actions$: Actions, private factsService: FactsService) {}
}
