import { DetailsComponent } from './../modules/details/details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FactsComponent } from '../modules/facts/facts.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: FactsComponent },
        { path: 'details', component: DetailsComponent }
      ],
      {
        initialNavigation: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
