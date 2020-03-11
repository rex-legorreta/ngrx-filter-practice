import { selectCurrentFact } from './../../store/reducers/index';
import { Fact } from './../../models/facts';
import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  fact: Fact;
  constructor(private store: Store<{ fact: Fact }>, private router: ActivatedRoute) {}

  ngOnInit() {
    this.store.select(selectCurrentFact).subscribe(fact => {
      this.fact = fact;
    });
  }
}
