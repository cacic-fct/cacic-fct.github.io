import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAboutAppPage } from './page-about-app.page';

const routes: Routes = [
  {
    path: '',
    component: PageAboutAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAboutAppPageRoutingModule {}
