import { selectFactTotal, selectLoading } from './../../store/reducers/index';
import { FactsActionTypes, FilterFacts, SetSelectedFactId } from './../../store/actions/facts.actions';
import { Fact } from './../../models/facts';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private store: Store<{ facts: Fact[] }>, private router: Router) {}

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

  goToDetails(fact: Fact) {
    this.store.dispatch(new SetSelectedFactId({ id: fact.id }));
    // doing this terrible approach for the lack of time
    setTimeout(() => {
      this.router.navigate(['/details']);
    }, 1000);
  }
}
