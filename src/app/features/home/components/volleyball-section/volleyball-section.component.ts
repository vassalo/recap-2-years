import { Component, signal } from '@angular/core';

import { VOLLEYBALL_MOMENTS, VOLLEYBALL_SECTION } from '../../data/home.data';

@Component({
  selector: 'app-volleyball-section',
  templateUrl: './volleyball-section.component.html',
  styleUrl: './volleyball-section.component.scss',
})
export class VolleyballSectionComponent {
  readonly sectionId = signal('season-volleyball');

  protected readonly volleyballSection = VOLLEYBALL_SECTION;
  protected readonly moments = VOLLEYBALL_MOMENTS;
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());

  protected onImageError(momentType: string): void {
    this.failedImages.update((current) => new Set([...current, momentType]));
  }

  protected hasImageError(momentType: string): boolean {
    return this.failedImages().has(momentType);
  }
}
