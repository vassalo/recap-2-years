import { Component, signal } from '@angular/core';

import {
  GAMING_PHOTOS,
  GAMING_SECTION,
  GAMING_STATS,
} from '../../data/home.data';

@Component({
  selector: 'app-gaming-section',
  templateUrl: './gaming-section.component.html',
  styleUrl: './gaming-section.component.scss',
})
export class GamingSectionComponent {
  readonly sectionId = signal('season-gaming');

  protected readonly gamingSection = GAMING_SECTION;
  protected readonly games = GAMING_STATS;
  protected readonly photos = GAMING_PHOTOS;
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());

  protected onImageError(photoId: string): void {
    this.failedImages.update((current) => new Set([...current, photoId]));
  }

  protected hasImageError(photoId: string): boolean {
    return this.failedImages().has(photoId);
  }
}
