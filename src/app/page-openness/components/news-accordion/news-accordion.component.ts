import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-accordion',
  templateUrl: './news-accordion.component.html',
  styleUrls: ['./news-accordion.component.scss'],
})
export class NewsAccordionComponent implements OnInit {
  @Input() meetings: { date: string; title: string; id: string }[];

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
