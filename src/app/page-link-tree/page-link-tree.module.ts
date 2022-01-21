import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLinkTreePageRoutingModule } from './page-link-tree-routing.module';

import { PageLinkTreePage } from './page-link-tree.page';

import { LinkListModule } from '../shared/components/link-list/link-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLinkTreePageRoutingModule,
    LinkListModule,
  ],
  declarations: [PageLinkTreePage],
})
export class PageLinkTreePageModule {}
