import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlateGridComponent } from './slate-grid.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SlateGridComponent],
  imports: [CommonModule, IonicModule],
  exports: [SlateGridComponent],
})
export class SlateGridModule {}
