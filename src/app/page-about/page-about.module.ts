import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAboutPageRoutingModule } from './page-about-routing.module';

import { PageAboutPage } from './page-about.page';

import { SlateGridComponent } from './components/slate-grid/slate-grid.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PageAboutPageRoutingModule],
  declarations: [PageAboutPage, SlateGridComponent],
})
export class PageAboutPageModule {}
