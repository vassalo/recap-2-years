import { Component, input } from '@angular/core';

import type {
  SeasonStatAccent,
  SeasonStatFeatured,
} from '../../models/season-stat.model';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  readonly value = input.required<string>();
  readonly label = input.required<string>();
  readonly description = input<string>();
  readonly accent = input<SeasonStatAccent>('gold');
  readonly featured = input<SeasonStatFeatured | undefined>();
  readonly animationIndex = input(0);
}
