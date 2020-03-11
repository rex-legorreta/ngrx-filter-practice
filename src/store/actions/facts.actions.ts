import { Action } from '@ngrx/store';

import { Fact } from './../../models/facts';

export enum FactsActionTypes {
  LOAD_FACTS = '[Fact] Load Facts',
  LOAD_FACTS_SUCCESS = '[Fact] Loaded Facts Successfully',
  FILTER_FACTS = '[Fact] Filter Facts',
  FILTER_FACTS_SUCCESS = '[Fact] Filter Facts Success'
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

export type FactsActions = LoadFacts | LoadFactsSuccess | FilterFacts;
