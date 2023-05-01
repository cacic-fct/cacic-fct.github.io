import { Component, Input, OnInit } from '@angular/core';
import { Meetings } from 'src/app/page-openness/page-openness.page';

@Component({
  selector: 'app-news-accordion',
  templateUrl: './news-accordion.component.html',
  styleUrls: ['./news-accordion.component.scss'],
})
export class NewsAccordionComponent implements OnInit {
  @Input() meetings: Meetings[];

  constructor() {}

  ngOnInit() {
    // Sort meetings by date with most recents on top
    this.meetings.sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  // Convert YYYY-MM-DD to DD/MM/YYYY
  formatDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}
