import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOpennessPageRoutingModule } from './page-openness-routing.module';

import { PageOpennessPage } from './page-openness.page';

import { AchievementsCardsComponent } from './components/achievements-cards/achievements-cards.component';
import { NewsAccordionComponent } from './components/news-accordion/news-accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOpennessPageRoutingModule,
  ],
  declarations: [
    PageOpennessPage,
    AchievementsCardsComponent,
    NewsAccordionComponent,
  ],
})
export class PageOpennessPageModule {}
