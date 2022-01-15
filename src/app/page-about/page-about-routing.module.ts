import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAboutPage } from './page-about.page';

const routes: Routes = [
  {
    path: '',
    component: PageAboutPage,
  },
  {
    path: 'app',
    loadChildren: () =>
      import('../page-about-app/page-about-app.module').then(
        (m) => m.PageAboutAppPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAboutPageRoutingModule {}
