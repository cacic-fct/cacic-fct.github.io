import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLinkTreePage } from './page-link-tree.page';

const routes: Routes = [
  {
    path: '',
    component: PageLinkTreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLinkTreePageRoutingModule {}
