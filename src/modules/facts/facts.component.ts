import { selectFactTotal, reducers } from './../../store/reducers/index';
import { FactsActionTypes } from './../../store/actions/facts.actions';
import { Fact } from './../../models/facts';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  facts$: Observable<Fact[]> = this.store.select(selectFactTotal);

  constructor(private store: Store<{ facts: Fact[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: FactsActionTypes.LOAD_FACTS });
  }
}
