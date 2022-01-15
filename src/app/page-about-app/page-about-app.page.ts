import { Component, OnInit } from '@angular/core';

import { GlobalConstants } from '../shared/services/global-constants.service';

@Component({
  selector: 'app-page-about-app',
  templateUrl: './page-about-app.page.html',
  styleUrls: ['./page-about-app.page.scss'],
})
export class PageAboutAppPage implements OnInit {
  globalConstants = GlobalConstants;
  constructor() {}

  ngOnInit() {}
}
