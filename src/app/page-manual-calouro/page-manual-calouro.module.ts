import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageManualCalouroPageRoutingModule } from './page-manual-calouro-routing.module';

import { PageManualCalouroPage } from './page-manual-calouro.page';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageManualCalouroPageRoutingModule,
    MarkdownModule.forChild(),
  ],
  declarations: [PageManualCalouroPage],
})
export class PageManualCalouroPageModule {}
