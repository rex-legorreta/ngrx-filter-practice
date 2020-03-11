import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FactsComponent } from '../modules/facts/facts.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: FactsComponent }], {
      initialNavigation: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
