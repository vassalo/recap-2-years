import { Component, signal } from '@angular/core';

import {
  SCREEN_MEMORIES,
  SCREEN_SECTION,
  SERIES_SLEEP_MOMENTS,
  SERIES_SLEEP_SUBSECTION,
} from '../../data/home.data';

@Component({
  selector: 'app-screen-section',
  templateUrl: './screen-section.component.html',
  styleUrl: './screen-section.component.scss',
})
export class ScreenSectionComponent {
  readonly sectionId = signal('season-screen');

  protected readonly screenSection = SCREEN_SECTION;
  protected readonly memories = SCREEN_MEMORIES;
  protected readonly sleepSubsection = SERIES_SLEEP_SUBSECTION;
  protected readonly sleepMoments = SERIES_SLEEP_MOMENTS;
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());

  protected onImageError(imageKey: string): void {
    this.failedImages.update((current) => new Set([...current, imageKey]));
  }

  protected hasImageError(imageKey: string): boolean {
    return this.failedImages().has(imageKey);
  }
}
