import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LinkListComponent],
  imports: [CommonModule, IonicModule],
  exports: [LinkListComponent],
})
export class LinkListModule {}
