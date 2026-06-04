import { Component } from '@angular/core';

import { AppButtonComponent } from '../../shared/components/app-button/app-button.component';
import { GamingSectionComponent } from './components/gaming-section/gaming-section.component';
import { MessagesSectionComponent } from './components/messages-section/messages-section.component';
import { ScreenSectionComponent } from './components/screen-section/screen-section.component';
import { SeasonScoreboardComponent } from './components/season-scoreboard/season-scoreboard.component';
import { TravelSectionComponent } from './components/travel-section/travel-section.component';
import { VolleyballSectionComponent } from './components/volleyball-section/volleyball-section.component';
import { HOME_DATA } from './data/home.data';

@Component({
  selector: 'app-home',
  imports: [
    AppButtonComponent,
    SeasonScoreboardComponent,
    TravelSectionComponent,
    ScreenSectionComponent,
    VolleyballSectionComponent,
    GamingSectionComponent,
    MessagesSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly homeData = HOME_DATA;

  protected scrollToSeasonPreview(): void {
    document.getElementById(this.homeData.scoreboardScrollId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
