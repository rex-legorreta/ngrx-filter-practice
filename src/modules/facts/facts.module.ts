import { FactsService } from './../../services/facts.service';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsComponent } from './facts.component';
import { FactsEffects } from '../../store/effects/facts.effect';

@NgModule({
  declarations: [FactsComponent],
  imports: [CommonModule, EffectsModule.forFeature([FactsEffects])],
  providers: [FactsService]
})
export class FactsModule {}
