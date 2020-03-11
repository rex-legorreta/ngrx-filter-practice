import { DetailsModule } from './../modules/details/details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FactsModule } from '../modules/facts/facts.module';
import { CustomSerializer } from './../util/custom.serializer';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { reducers } from '../store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    FactsModule,
    DetailsModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
