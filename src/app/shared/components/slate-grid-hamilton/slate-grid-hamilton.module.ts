import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlateGridHamiltonComponent } from './slate-grid-hamilton.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SlateGridHamiltonComponent],
  imports: [CommonModule, IonicModule],
  exports: [SlateGridHamiltonComponent],
})
export class SlateGridHamiltonModule {}
