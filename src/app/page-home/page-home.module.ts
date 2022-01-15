import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageHomePageRoutingModule } from './page-home-routing.module';

import { PageHomePage } from './page-home.page';
import { DateComponent } from './components/date/date.component';

import { InfoComponent } from './components/info/info.component';

import { LinksComponent } from './components/links/links.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PageHomePageRoutingModule],
  declarations: [PageHomePage, DateComponent, InfoComponent, LinksComponent],
})
export class PageHomePageModule {}
