import { selectFactTotal, selectLoading } from './../../store/reducers/index';
import { FactsActionTypes, FilterFacts } from './../../store/actions/facts.actions';
import { Fact } from './../../models/facts';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  facts$: Observable<Fact[]> = this.store.select(selectFactTotal);
  inputText: string;
  inputTextChangeTimeout;
  loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store<{ facts: Fact[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: FactsActionTypes.LOAD_FACTS });
  }

  onInputTextKeyUp() {
    clearTimeout(this.inputTextChangeTimeout);
    this.inputTextChangeTimeout = setTimeout(this.filterFacts, 2500);
  }

  onInputTextKeyDown() {
    clearTimeout(this.inputTextChangeTimeout);
  }

  filterFacts = () => {
    if (this.inputText === '') {
      this.store.dispatch({ type: FactsActionTypes.LOAD_FACTS });
      return;
    }
    this.store.dispatch(new FilterFacts({ filterText: this.inputText }));
  };
}
