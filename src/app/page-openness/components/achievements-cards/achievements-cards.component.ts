import { Component, Input, OnInit } from '@angular/core';
import { Achievements } from 'src/app/page-openness/page-openness.page';

@Component({
  selector: 'app-achievements-cards',
  templateUrl: './achievements-cards.component.html',
  styleUrls: ['./achievements-cards.component.scss'],
})
export class AchievementsCardsComponent implements OnInit {
  @Input() achievements: Achievements[];

  constructor() {}

  ngOnInit() {}
}
