import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEventsPage } from './page-events.page';

const routes: Routes = [
  {
    path: '',
    component: PageEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEventsPageRoutingModule {}
