import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAboutAppPageRoutingModule } from './page-about-app-routing.module';

import { PageAboutAppPage } from './page-about-app.page';

import { SlateGridHamiltonModule } from '../shared/components/slate-grid-hamilton/slate-grid-hamilton.module';

import { ContributorsComponent } from './components/contributors/contributors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAboutAppPageRoutingModule,
    SlateGridHamiltonModule,
  ],
  declarations: [PageAboutAppPage, ContributorsComponent],
})
export class PageAboutAppPageModule {}
