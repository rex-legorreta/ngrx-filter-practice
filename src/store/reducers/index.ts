import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromFact from './facts.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface State {
  facts: fromFact.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  facts: fromFact.reducer,
  router: routerReducer
};

export const selectFactState = createFeatureSelector<fromFact.State>('facts');

export const selectRouterState = createFeatureSelector<State>('router');

export const selectFactTotal = createSelector(selectFactState, fromFact.selectAllFacts);

export const selectCurrentFactId = createSelector(selectFactState, fromFact.getSelectedFactId);

export const selectLoading = createSelector(selectFactState, (state: fromFact.State) => state.loading);

export const selectRouting = createSelector(selectRouterState, (state: State) => state.router);

export const selectCurrentFact = createSelector(
  selectFactState,
  fromFact.getSelectedFactId,
  state => state.entities[state.selectedFactId]
);
