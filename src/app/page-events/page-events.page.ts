import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-events',
  templateUrl: './page-events.page.html',
  styleUrls: ['./page-events.page.scss'],
})
export class PageEventsPage implements OnInit {
  youtube: Array<string> = [
    'i_STkDJ3z5s',
    '9myJMm-8S90',
    'FN18datZk1M',
    'GrVpFnxXQoY',
    '0ku7FR5Tfv0',
  ];
  constructor() {}

  ngOnInit() {}
}
