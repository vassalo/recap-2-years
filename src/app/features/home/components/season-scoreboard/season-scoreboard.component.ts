import { Component, input } from '@angular/core';

import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import {
  SEASON_SCOREBOARD,
  SEASON_STATS,
} from '../../data/home.data';

@Component({
  selector: 'app-season-scoreboard',
  imports: [StatCardComponent],
  templateUrl: './season-scoreboard.component.html',
  styleUrl: './season-scoreboard.component.scss',
})
export class SeasonScoreboardComponent {
  readonly sectionId = input('season-preview');

  protected readonly scoreboard = SEASON_SCOREBOARD;
  protected readonly stats = SEASON_STATS;
}
