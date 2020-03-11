import { Action } from '@ngrx/store';

import { Fact } from './../../models/facts';

export enum FactsActionTypes {
  LOAD_FACTS = '[Fact] Load Facts',
  LOAD_FACTS_SUCCESS = '[Fact] Loaded Facts Successfully'
}

export class LoadFacts implements Action {
  readonly type = FactsActionTypes.LOAD_FACTS;

  constructor() {}
}

export class LoadFactsSuccess implements Action {
  readonly type = FactsActionTypes.LOAD_FACTS_SUCCESS;
  constructor(public payload: { facts: Fact[] }) {}
}

export type FactsActions = LoadFacts | LoadFactsSuccess;
