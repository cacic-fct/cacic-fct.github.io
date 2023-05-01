import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-cards',
  templateUrl: './achievements-cards.component.html',
  styleUrls: ['./achievements-cards.component.scss'],
})
export class AchievementsCardsComponent implements OnInit {
  @Input() achievements: {
    image?: string;
    title: string;
    content: string;
    url?: string;
  }[];

  constructor() {}

  ngOnInit() {}
}
