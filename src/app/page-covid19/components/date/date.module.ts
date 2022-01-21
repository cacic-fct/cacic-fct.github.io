import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateComponent } from './date.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DateComponent],
  imports: [CommonModule, IonicModule],
  exports: [DateComponent],
})
export class DateModule {}
