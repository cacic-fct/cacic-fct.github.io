import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-accordion',
  templateUrl: './news-accordion.component.html',
  styleUrls: ['./news-accordion.component.scss'],
})
export class NewsAccordionComponent implements OnInit {
  meetings = [
    {
      date: '2021-12-05',
      title: 'Reunião de dezembro',
      id: '1dZd-FwjXMTGbbs1yu3JNDB6lXjbItYKKMRvrefRXnzU',
    },
    {
      date: '2021-10-27',
      title: 'Cerimônia de posse da chapa',
      id: '1m-By1TGhyySP0f52Fm5Z1dqB2XTVMZ9gQpuLIwHoUBw',
    },
    {
      date: '2021-10-25',
      title: 'Conversa entre as chapas',
      id: '1Nl2TfOckNuOX5CJcUQUQHgF7eJx5oolMroheElKyAqQ',
    },
    {
      date: '2021-10-08',
      title: 'Apresentação da chapa Margaret Hamilton',
      id: '1cknkNev-keAnTDVbz41ZRIj9C19jcVuaWMzSa67Ip6g',
    },
    {
      date: '2021-10-06',
      title: 'Discussão inicial com os membros da chapa',
      id: '118Dkj4GWq2E_btrA6q8FX7UWlOrMY2LXpN1wtX5tXxE',
    },
  ];
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
