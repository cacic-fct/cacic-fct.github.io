import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
  ExtraOptions,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page-home/page-home.module').then((m) => m.PageHomePageModule),
  },
  {
    path: 'transparencia',
    loadChildren: () =>
      import('./page-openness/page-openness.module').then(
        (m) => m.PageOpennessPageModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./page-about-app/page-about-app.module').then(
        (m) => m.PageAboutAppPageModule
      ),
  },
  {
    path: 'privacidade',
    loadChildren: () =>
      import('./page-privacy-policy/page-privacy-policy.module').then(
        (m) => m.PagePrivacyPolicyPageModule
      ),
  },
  {
    path: 'licenses',
    loadChildren: () =>
      import('./page-licenses/page-licenses.module').then(
        (m) => m.PageLicensesPageModule
      ),
  },
  {
    path: 'pandemia',
    loadChildren: () =>
      import('./page-covid19/page-covid19.module').then(
        (m) => m.PageCovid19PageModule
      ),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./page-link-tree/page-link-tree.module').then(
        (m) => m.PageLinkTreePageModule
      ),
  },
  {
    path: 'manual-do-calouro',
    loadChildren: () =>
      import('./page-manual-calouro/page-manual-calouro.module').then(
        (m) => m.PageManualCalouroPageModule
      ),
  },
  {
    path: 'calouros',
    loadChildren: () =>
      import('./page-calouros/page-calouros.module').then(
        (m) => m.PageCalourosPageModule
      ),
  },
  {
    path: 'eventos',
    loadChildren: () =>
      import('./page-events/page-events.module').then(
        (m) => m.PageEventsPageModule
      ),
  },
];

const options: ExtraOptions = {
  preloadingStrategy: NoPreloading,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
