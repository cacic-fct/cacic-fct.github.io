import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageHomePageRoutingModule } from './page-home-routing.module';

import { PageHomePage } from './page-home.page';

import { LinkListModule } from './../shared/components/link-list/link-list.module';

import { SlateGridHamiltonModule } from '../shared/components/slate-grid-hamilton/slate-grid-hamilton.module';
import { SlateGridModule } from '../shared/components/slate-grid/slate-grid.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageHomePageRoutingModule,
    LinkListModule,
    SlateGridHamiltonModule,
    SlateGridModule,
  ],
  declarations: [PageHomePage],
})
export class PageHomePageModule {}
