import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCovid19Page } from './page-covid19.page';

const routes: Routes = [
  {
    path: '',
    component: PageCovid19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCovid19PageRoutingModule {}
