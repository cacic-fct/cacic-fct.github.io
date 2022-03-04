import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEventsPageRoutingModule } from './page-events-routing.module';

import { PageEventsPage } from './page-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEventsPageRoutingModule
  ],
  declarations: [PageEventsPage]
})
export class PageEventsPageModule {}
