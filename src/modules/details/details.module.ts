import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';
import { FactsService } from './../../services/facts.service';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsEffects } from '../../store/effects/facts.effect';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, FormsModule, EffectsModule.forFeature([FactsEffects])],
  providers: [FactsService]
})
export class DetailsModule {}
