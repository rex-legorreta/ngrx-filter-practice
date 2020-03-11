import { Action } from '@ngrx/store';

import { Fact } from './../../models/facts';

export enum FactsActionTypes {
  LOAD_FACTS = '[Fact] Load Facts',
  LOAD_FACTS_SUCCESS = '[Fact] Loaded Facts Successfully',
  FILTER_FACTS = '[Fact] Filter Facts',
  FILTER_FACTS_SUCCESS = '[Fact] Filter Facts Success',
  SET_SELECTED_FACT_ID = '[Fact] Set Selected Fact Id'
}

export class LoadFacts implements Action {
  readonly type = FactsActionTypes.LOAD_FACTS;

  constructor() {}
}

export class LoadFactsSuccess implements Action {
  readonly type = FactsActionTypes.LOAD_FACTS_SUCCESS;
  constructor(public payload: { facts: Fact[] }) {}
}

export class FilterFacts implements Action {
  readonly type = FactsActionTypes.FILTER_FACTS;

  constructor(public payload: { filterText: string }) {}
}

export class SetSelectedFactId implements Action {
  readonly type = FactsActionTypes.SET_SELECTED_FACT_ID;

  constructor(public payload: { id: string }) {}
}

export type FactsActions = LoadFacts | LoadFactsSuccess | FilterFacts | SetSelectedFactId;
