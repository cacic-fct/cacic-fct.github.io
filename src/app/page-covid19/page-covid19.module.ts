import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCovid19PageRoutingModule } from './page-covid19-routing.module';

import { PageCovid19Page } from './page-covid19.page';

import { InfoComponent } from './components/info/info.component';

import { LinksComponent } from './components/links/links.component';

import { LinkListModule } from './../shared/components/link-list/link-list.module';

import { DateModule } from './components/date/date.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCovid19PageRoutingModule,
    LinkListModule,
    DateModule,
  ],
  declarations: [PageCovid19Page, InfoComponent, LinksComponent],
})
export class PageCovid19PageModule {}
