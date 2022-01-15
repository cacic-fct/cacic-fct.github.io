import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAboutAppPageRoutingModule } from './page-about-app-routing.module';

import { PageAboutAppPage } from './page-about-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAboutAppPageRoutingModule,
  ],
  declarations: [PageAboutAppPage],
})
export class PageAboutAppPageModule {}
