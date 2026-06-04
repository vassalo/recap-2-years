import { Component, signal } from '@angular/core';

import { AWARDS_SECTION } from '../../data/home.data';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrl: './awards-section.component.scss',
})
export class AwardsSectionComponent {
  readonly sectionId = signal('season-awards');

  protected readonly awardsSection = AWARDS_SECTION;
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());

  protected onImageError(awardId: string): void {
    this.failedImages.update((current) => new Set([...current, awardId]));
  }

  protected hasImageError(awardId: string): boolean {
    return this.failedImages().has(awardId);
  }
}
