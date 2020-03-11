import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as _ from 'lodash';

import { Fact } from './../../models/facts';
import { FactsActions, FactsActionTypes } from './../actions/facts.actions';

export interface State extends EntityState<Fact> {
  selectedFactId: string;
  loading: boolean;
}

export const adapter: EntityAdapter<Fact> = createEntityAdapter<Fact>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: null,
  selectedFactId: null
});

export function reducer(state = initialState, action: FactsActions): State {
  switch (action.type) {
    case FactsActionTypes.LOAD_FACTS:
      return {
        ...state,
        loading: true
      };
    case FactsActionTypes.LOAD_FACTS_SUCCESS:
      return adapter.addAll(_.get(action.payload, 'facts', []), { ...state, loading: false });
    case FactsActionTypes.FILTER_FACTS:
      return { ...state, loading: true };
    case FactsActionTypes.SET_SELECTED_FACT_ID:
      console.log(action.payload.id);

      return { ...state, selectedFactId: action.payload.id };
    default:
      return state;
  }
}

export const getSelectedFactId = (state: State) => state.selectedFactId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectAllFacts = selectAll;

export const selectFactEntities = selectEntities;
